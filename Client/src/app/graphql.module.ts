import { InjectionToken, NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isBrowser } from '@shared/tools/environmentUtils';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

export function createApollo(httpLink: HttpLink, cache: InMemoryCache, transferState: TransferState): ApolloClientOptions<any> {
  const hasStateFromServer = transferState.hasKey<any>(STATE_KEY);

  if (hasStateFromServer) {
    const state = transferState.get<any>(STATE_KEY, null);
    cache.restore(state);
  } else {
    transferState.onSerialize(STATE_KEY, () => {
      return cache.extract();
    });
  }
  return {
    ssrMode: true,
    link: httpLink.create({
      uri(operation){
        const isMutation = operation.query.definitions.some((d: any) => d.operation === 'mutation');
        // use docker container api url if ssr
        // indicating that it is a mutation that must not be cached for proxy caching mechanism
        return `${isBrowser ? environment.publicApiUrl : environment.serverApiUrl}${isMutation ? '?nocache=true' : ''}`;
      }
    }),
    cache,
    //disable mutations caching by default in browser. Let server rehydration work
    ...(isBrowser
      ? {defaultOptions: {
        mutate: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore'
        }
      }}
      : {}
    )
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_CACHE,
      useValue: new InMemoryCache()
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, APOLLO_CACHE, TransferState]
    }
  ]
})
export class GraphQLModule {}

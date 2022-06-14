import { InjectionToken, NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserTransferStateModule, makeStateKey, TransferState } from '@angular/platform-browser';
import { isBrowser } from '@shared/tools/environmentUtils';
import { environment } from 'src/environments/environment';

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
    // Reset cache after extraction to avoid sharing between requests
    cache.reset();
  }
  return {
    ssrMode: true,
    link: httpLink.create({
      // use docker container api url if ssr, otherwise public external api that browsers use
      uri: isBrowser ? environment.publicApiUrl : environment.serverApiUrl
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
  imports: [ApolloModule, BrowserTransferStateModule],
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

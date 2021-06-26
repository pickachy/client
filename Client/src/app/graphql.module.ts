import { InjectionToken, NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

export function createApollo(httpLink: HttpLink, cache: InMemoryCache, transferState: TransferState): ApolloClientOptions<any> {
  const isBrowser = transferState.hasKey<any>(STATE_KEY);

  if (isBrowser) {
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
      uri: isBrowser ? environment.publicApiUrl : environment.serverApiUrl
    }),
    cache
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

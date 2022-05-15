#!/bin/sh

# If folder is empty, we prerender our application only one time. Further restarts will not trigger prerendering
if [ -z "$(ls -A dist/pickachy/browser)" ] || [ -z "$(ls -A dist/pickachy/server)" ]; then
   npm run prerender;
fi

# Starting SSR server that serves our application
npm run serve:ssr;

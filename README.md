# drhay.es

Can I make a shortlink site using [Netlify](https://www.netlify.com)'s redirecting service?

Yes.

Can I make it dynamically generate from a directory of files, thus ensuring uniqueness and easy additions?

Also yes.

## Overview

The `Makefile`'s default target is `site/_redirects`. That file has a [pretty simple format](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file) so I'm going to dynamically generate it with [a relatively simple Node script](src/generate.mjs).

To add more link targets, add a file to the `links` directory. The name of the file becomes the shortlink suffix and the contents become the URL that we 301 redirect to.

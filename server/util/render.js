import serialize from 'serialize-javascript'

import * as config from '../config'

const render = ({
  html = '',
  preloadedState = {},
  styleTags = '',
  bundleInfo = {},
}) => {
  const chunks = bundleInfo.chunks()

  return `
    <!DOCTYPE html>
      <html>

      <head>
        <meta charset="utf-8">
        <title>Poke</title>
        <meta name="google-site-verification" content="cGOhAHkmx92xY5HewhvTZVaufBeakKs2QbyyLrBsoXw" />
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="7-cdMGyckfR8LtHSDUMhNhh7_x6tbgPJBH81u8inAeM" />
        
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        ${styleTags}
      </head>

      <body>
        <div id="app">${html}</div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })}
          window.__CONFIG__ = ${serialize(config, { isJSON: true })}
          window.__CLIENT__ = true
        </script>

        <script
          type="application/javascript"
          src="${chunks.javascript.manifest}"
        >
        </script>

        <script
          type='application/javascript'
          src='${chunks.javascript['vendor~main']}'
        >
        </script>

        <script
          type="application/javascript"
          src="${chunks.javascript.main}"
        >
        </script>
      </body>
    </html>
  `
}

export default render
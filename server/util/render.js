// @todo
//  production origin: /manifest.js
//  development origin: /main.js
const render = (html = '') => {
  return `
    <!DOCTYPE html>
      <html>

      <head>
        <meta charset="utf-8">
        <title>Poke</title>
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
      </head>

      <body>
        <div id="app">${html}</div>

        <script
          type="application/javascript"
          src="http://localhost:3006/manifest.js"
        >
        </script>

        <script
          type="application/javascript"
          src="http://localhost:3006/main.js"
        >
        </script>
      </body>
    </html>
  `
}

export default render
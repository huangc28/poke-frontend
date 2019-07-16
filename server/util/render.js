// @todo
//  production origin: /manifest.js
//  development origin: /main.js
const render = (html = '') => {
  return `
    <!DOCTYPE html>
      <html>

      <head>
        <meta charset="utf-8">
        <title>kiki-buy</title>
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>

      <body>
        <div id='app'>${html}</div>

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
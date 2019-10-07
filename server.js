require('isomorphic-unfetch')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url, true)
    if (pathname === '/') {
      // Redirect to user's locale or ru for development
      // const accept = accepts(req)
      // const locale = accept.language(dev ? ['ru'] : languages)
      const locale = 'ru'
      res.setHeader(
        'Cache-Control',
        'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
      )
      // TODO include query here, now it's being reset
      res.writeHead(302, { Location: `/${locale}` })
      res.end()
      return
    }
    handler(req, res)
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

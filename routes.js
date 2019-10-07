const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add({ name: 'index', pattern: '/:locale(ru|en)', page: 'index' })

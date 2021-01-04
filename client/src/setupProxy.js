const baseUrl = "https://youtube--clone.herokuapp.com"
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `${baseUrl}` && 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};


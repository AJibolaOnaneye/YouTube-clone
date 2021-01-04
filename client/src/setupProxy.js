const baseUrl = "https://youtube--clone.herokuapp.com"
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `${baseUrl}`,
            changeOrigin: true,
        })
    );
};

// 'http://localhost:5000'
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    // Konfiguriere den Proxy
    createProxyMiddleware({
        target: 'https://euterpe.webuntis.com', // Zielserver
        changeOrigin: true,
        pathRewrite: {
            '^/api/proxy-css': '/WebUntis/appColor/viewColors.css', // Zielroute
        },
        onProxyRes: (proxyRes) => {
            // MIME-Typ und andere Header anpassen
            proxyRes.headers['Content-Type'] = 'text/css'; // Setze MIME-Typ auf "text/css"
            delete proxyRes.headers['x-content-type-options']; // Entferne "nosniff"
        },
    })(req, res);
};

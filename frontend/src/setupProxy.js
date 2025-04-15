const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      ws: false,
      logLevel: 'debug', // Helps debug proxy issues
      // Explicitly set allowedHosts to avoid the error
      allowedHosts: ['localhost', '127.0.0.1', '.ngrok.io'], // Add other hosts if needed
    })
  );
};
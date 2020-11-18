import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app){
  app.use(
      //Client에서 데이터를 받아오기
      createProxyMiddleware('/api', {
          target: 'http://localhost:3000/',
          changeOrigin: true
      })
  )
};
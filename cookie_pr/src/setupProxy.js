// 설정된 프록시는 클라이언트 사이드에서 Node.js 서버 사이드인 http:localhost:3001/api'로의 요청을 처리하여 서버데이터를 가져옴
// ** proxy없이 연결해봅시다

const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      //Client에서 데이터를 받아오기
      proxy.createProxyMiddleware('/api', {
          target: 'http://localhost:3001/',
          changeOrigin: true
        //   option.changeOrigin: true/false, Default: false - changes the origin of the host header to the target URL
        //  타깃 url로 헤더를 변경
        // node.js 에서 포트 3001을 사용 시, 3000포트에서 현재 3001의 기능을 빌려와 사용.
      }),
      proxy.createProxyMiddleware('/userinfo', {
          target: 'http://localhost:3001/',
          changeOrigin: true
        //   option.changeOrigin: true/false, Default: false - changes the origin of the host header to the target URL
        //  타깃 url로 헤더를 변경
        // node.js 에서 포트 3001을 사용 시, 3000포트에서 현재 3001의 기능을 빌려와 사용.
      })
  )
};
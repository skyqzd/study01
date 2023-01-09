//创建web服务器

//1 导入http模块
const http = require ('http')
//2  创建web服务器实例
const server = http.createServer()
//3
server.on('request',(req,res) =>{
    //只要有客户端来请求我们自己的服务器 ，就会触发request事件，从而调用这个事件处理函数
    console.log('Smoe visit our web server')
})

//4 调用server.listen(端口号 ，cb回调)方法，即可启动web服务器
server.listen(8080,function(){
    console.log('ok')
})

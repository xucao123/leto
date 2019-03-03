//进度条的功能
NProgress.start();//展示进度条
NProgress.done()//进度条走到最后结束
//当我们在浏览器访问一个页面实际上是先发送请求，服务器将整个html页面进行返回，浏览器端执行里面的代码，页面中会有一些请求来获取数据渲染页面的，当页面加载完成就意味着全部的ajax都回来了
//所以进度条的开始应该是页面中第一个ajax发送的时候，进度条结束是最后一个ajax响应回来的时候
//在jq中的ajax全局事件：

// .ajaxComplete(fn);   每个ajax完成时, 都会调用fn回调函数   (完成: 不管成功还是失败)
// .ajaxSuccess(fn);    每个ajax只要成功了, 就会调用fn
// .ajaxError(fn);      每个ajax只要失败了, 就会调用fn
// .ajaxSend(fn);       每个ajax发送前, 都会调用fn

// .ajaxStart(fn);      在第一个ajax开始发送时, 调用fn
// .ajaxStop(fn);       在全部的ajax完成时, 调用fn  (不管成功还是失败)
// 注册ajax全局事件，在第一个ajax发送时开启进度条，在最后一个ajax响应回来时关闭进度条
// $(document).ajaxStart(function(){
//     NProgress.start();
// })
// $(document).ajaxStop(function(){
//     setTimeout(function(){
//     NProgress.done();

//     },500)
// })
// $(function(){
//     $(document).ajaxStart(function() {
//         // 开启进度条
//         NProgress.start();
//       })
      
//       // 在全部的ajax完成时, 关闭进度条
//       $(document).ajaxStop(function() {
//         // 模拟网络延迟
//         setTimeout(function() {
//           // 结束进度条
//           NProgress.done();
//         }, 500);
//       });
// })
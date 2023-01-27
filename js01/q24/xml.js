/* let xhr = new XMLHttpRequest();
     xhr.open("post","xml.js",true);
     xhr.send(null);
     if((xhr.status>=200 && xhr.status<300)||xhr.status==304){
        alert('ok');
     }
     else{
        alert("unsuccessful");
     }
 */

     //收到响应后 XHR的属性 responseText:作为响应体返回的文本
     //responseXML 包含响应数据的XML DOM文档
     //status:响应的http状态  statusText 对状态描述的文本
      //readyState 表示当前所处请求响应中的哪个状态
      // 0 1 2 3 4
      //每次 readyState 从一个值变成另一个值，都会触发 readystatechange 事件
    //取消异步请求
    //xhr.abort();

    //readyState从一个值变成另外一个值 都会触发readyStatechange
    /* let xhr = new XMLHttpRequest();
    xhr.readyStatechange=function(){
        if(xhr.readyState==4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                alert(xhr.responseText);
            }
            else{
               alert(xhr.status); 
            }
        }
    };
    xhr.open("get","xml.js",true);
    xhr.setRequestHeader("Myheader","MyValue");//额外添加请求头信息  头部字段的名称和值
    xhr.send(null); */
    //想要得到头部信息 xhr.getResponseHeader("Myheader");
    //得到全部的头部信息  xhr.getAllResponseHeader();



let xhr =new XMLHttpRequest();
xhr.open("get","http://ajax-base-api-t.itheima.net/api/getbooks","true");
xhr.send(null);



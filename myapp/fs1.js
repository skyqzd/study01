const fs=require ('fs');
const path = require ('path');


fs.readFile(path.join(__dirname,'1.txt'),'utf8',function(err,dateStr){
    console.log(err)
    //读取成功err为null
    console.log('------')
    console.log(dateStr)//dateStr 为undefined读取失败
});

fs.writeFile(__dirname+'math.html','kk','utf8',function(err){
    console.log(err)
    
   
});
/* fs.readFile('1.txt','utf8',function (err,dateStr) {
    if(err){
        return console.log('失败'+err.message)
    }
    console.log('成功'+dateStr)
}); */
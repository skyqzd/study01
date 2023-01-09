 function dosum(num1,num2){
    if((typeof num1 == "string") || (typeof num2 == "string")){
       console.warn('您输入的是字符串类型');
       
    }  
    return parseFloat(num1) + parseFloat(num2); 
}
console.log(dosum("1",2));    
    
       

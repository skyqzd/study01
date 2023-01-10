/* function dosum(num1, num2) {
   if ((typeof num1 == "string") || (typeof num2 == "string")) {
      console.warn('您输入的是字符串类型');

   }
   return parseFloat(num1) + parseFloat(num2);
}
console.log(dosum("1", 2));
 */


 //求最大值
var arr1 = [11, 22, 50, 30,20];
var res1 = arr1[0];
function doMax() {
   for (var i = 1; i < arr1.length; i++) {
      if (arr1[i] > arr1[i-1]) {
         res1 = arr1[i];
      }
  }    
   return res1;

}
doMax(arr1);
console.log(res1); 

//排序
/* var arr1 = [11, 22, 10, 30];
var mid;
function paiXu() {
   for (var i = 0; i < arr1.length; i++) {


      for (var j = 0; j < arr1.length - i - 1; j++) {

         if (arr1[j] < arr1[j + 1]) {
            mid = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = mid;
        
              

         }
              
      }
   }
   return arr1;
}
paiXu(arr1);
console.log(arr1); */

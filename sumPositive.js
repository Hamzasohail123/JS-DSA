
function sumPositive(arr){
   let sum = 0;
   for(let i = 0; i < arr.length ; i++){
    if(arr[i] > 0){
       sum +=arr[i]
    }
   }
   return sum
}

const input = [2, -3, 5, -7, 10,9,-8];
console.log(sumPositive(input));

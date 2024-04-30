
// function palindromCheck(str){
//     let planStr = str.length;
//     for(let i = 0; i < str.length/2; i++){
//          if(str[i] != str[planStr - 1 -i]){
//             return 'this is palindrom'
//          } else {
//             return 'this aint palindrom'
//          }
//     }
// }

// strn = 'my name is hamza';
// console.log(palindromCheck(strn));

function palindromCheck(str){
   for(let i = 0; i < str.length; i++){
    if(str[i] != str[str.length - 1 - i]){
        return 'this is not palindrom'
    } 
   }
   return 'this is palindrome'
}
strn = 'madam';
console.log(palindromCheck(strn));
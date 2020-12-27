// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }

// function add(num1, num2){
//      num2 = num2 || 20;
//      return num1 + num2
// }

function add(num1, num2 = 70){
    return num1 + num2;
}
const total = add(50, 20);
console.log(total)
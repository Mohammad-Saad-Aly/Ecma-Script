//========= Rest Parameters ============

// function sum(a,b,...args){
//     var v = 0
//     for(var i = 0; i < args.length; i++){
//         v += args[i]
//     }
//     return a + b + v
// }

// console.log(sum(2,3,5))

// ========== Promises =========

// let a = new Promise((res, rej) => {
//   let relation = false;
//   if (relation) {
//     res("han shaadi hogai");
//   } else {
//     rej("katt gaya");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ======== for each , map , filter , for in ==========

// let arr = ["Saad", "Ali", "Hamza", "Ahsan", "Jalal"];
// let arr = [2, 4, 6, 8];
// let arr2 = arr.map((data) => {
//   return data * 2;
// });
// console.log(arr)
// console.log(arr2)

// let arr = [2, 54, 6, 8, 34, 2, 4324, 23, 34, 54, 6, 3489];
// let arr2 = arr.filter(function(data){
//     return data > 100
// })
// console.log(arr2)

// let arr2 = arr.forEach((data) => {
//    return data * 2
// });
// console.log(arr2)

// ====== hoisting =========

// function hello() {
//   console.log("hello world");
// }

// hello();

// var x = 5;
// console.log(x)
// x = 5;
// console.log(x);
// var x;
// "use strict"
// hello()
// function hello(){
//     console.log('hello')
// }

// console.log(x = 5);

// var x ; // dec
// var x = 4 ; // dec ass

// ====== this keyword ==========
// var obj = {
//   fname: "saad",
//   age: 23,
//   a: function () {
//     return this.fname + " " + this.age;
//   },
// };

// console.log(obj.a());

// let obj = {
//     roll : 23,
//     name : 'saad',
//     uni : 'Smiu'
// }

// for(let key in obj){
//     document.write(`<table border='1px'><tr><td>${key}</td><td>${obj[key]}</td></tr></table>`)
//     // document.write(key+" : "+obj[key]+"<br>")
// }

// for(let key in obj){
//     console.log(obj[key])
// }

// let userdat = +prompt("Enter Date: ");

// let a = new Promise((res, rej) => {
//      let dat=24

//     if(dat===userdat){
//         res("hammad n treat dedi ha")
//     }
//     else{
//         rej("hammad n topi krwadi ")
//     }
// }).then((data)=>{
//     document.write(data)
// }).catch((err)=>{
//     document.write(err)
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// document.write("Even Number: "+'<br/>')
// let arr2 = arr.map((data) => {
//   //   return ;
//   if (data % 2 === 0) {
//     document.write(data+' ');
//   }
  
// });
// document.write('<br/>'+"odd Number: "+'<br/>')
//  arr2 = arr.map((data) => {
//     //   return ;
//     if (data % 2 != 0) {
//         document.write(data+' ');
//       }
    
//   });
// console.log(arr2);



// function checkpl(string){
//    let  stringValues = string.split('');

//     let reverseValues = stringValues.reverse();

//     let reverseString = reverseValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//        console.log('It is not a palindrome');
//     }
// }

// let str = prompt('Enter a string: ');

// checkpl(str);

function checkPalindrome(string) {

    let val1 = string.split('');

    let rev = val1.reverse();

    let revstr = rev.join('');

    if(string == revstr) {
        document.write(string+' is a palindrome');
    }
    else {
        document.write(string+' is not a palindrome');
    }
}

let string = prompt('Enter a string: ');

checkPalindrome(string);
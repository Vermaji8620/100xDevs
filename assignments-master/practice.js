//  callback function (function inside of a function)

// const fs = require("fs");

// function kirat(ondone) {
//   console.log("I am kirat function trying to read a file ");
//   fs.readFile(
//     "../assignments-master/01-js/package.json",
//     "utf-8",
//     (err, data) => {
//       ondone(data);
//     }
//   );
// }

// function ondone(data) {
//   console.log("this is the ondone function trying to print the dataa");
//   console.log(data);
// }

// kirat(ondone);

// using PROMISES------
// Its just a class that makes callbacks and async functions slighty more readable
// On creating, we just need to pass the function as the first argument and resolve as the first argument inside the function ...
// and the data that is being returned inside of the resolve/reject actually serves as a parameter to the function to the '.then(parameter)' ..

// const fs = require("fs");

// function kirat() {
//   return new Promise(function (resolve) {
//     fs.readFile(
//       "../assignments-master/01-js/package.json",
//       "utf-8",
//       (err, data) => {
//         resolve(data);
//       }
//     );
//   });
// }

// function ondone(data) {
//   console.log("this is the ondone function trying to print the dataa");
//   console.log(data);
// }

// kirat().then(ondone);

//  CONSIDER THIS TOO FULLY UNDERSTAND THESE----

// SIMPLE CALLBACK--
// function kirat(callback) {
//   setTimeout(callback, 2000);
// }

// kirat(() => {
//   console.log("print this hello");
// });

// USING PROMISES----
// function kirat() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
// }

// kirat().then(() => {
//   console.log("print this ");
// });

// USING ASYNC AWAIT-----
// function kirat() {
//   return new Promise((resolve) => {
//     setTimeout(resolve("return this"), 2000);
//   });
// }
// async function main() {
//   const awa = await kirat();
//   console.log(awa);
// }

// main();


"use strict";
//  type lets us define the optional data types , interface doesn't
const filterfunc = (arrinput) => {
    return arrinput.filter(each => each.age >= 16);
};
console.log(filterfunc([{ name: 'asdasda', class: 'afaas', age: 12 }, { name: 'SEEE', class: 'SSSSSSS', age: 15 }, { name: 'XXX', class: 'XXXXXX', age: 17 }, { name: 'ZZZZ', class: 'ZZZZZZZZ', age: 16 }]));

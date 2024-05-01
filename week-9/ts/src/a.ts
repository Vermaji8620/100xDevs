//  type lets us define the optional data types , interface doesn't

// type GreetArg = number | string

// const greet = (id: GreetArg) => {
//     console.log("thjhfjdhfjdsa" + id)
// }

// greet(5245)
// greet("4545454")

// union and intersection

// type Employee = {
//     name: string,
//     startDate: Date
// }

// interface Manager {
//     name: string,
//     department: string
// }

// for intersection
// type TechLead = Employee & Manager
// for union
// type TechLead = Employee | Manager


// const t: TechLead = {
//     name: "adjhasgd",
//     startDate: new Date(),
//     department: "hsdfgds"
// }


// //////////////////////////    everytime use type because it goes with everything , even for union and intersection, just for implementing to classes we use interface

// arrays in TS
// max value of a number
// function maxValue(arr: number[]) {
// type num = number[];
// function maxValue(arr: num) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maxValue([1, 2, 3]));

// type allarray = {
//     name: string, class: string, age: number
// }

// const filterfunc = (arrinput: allarray[]) => {

//     return arrinput.filter(each => each.age >= 16)

// }

// console.log(filterfunc([{ name: 'asdasda', class: 'afaas', age: 12 }, { name: 'SEEE', class: 'SSSSSSS', age: 15 }, { name: 'XXX', class: 'XXXXXX', age: 17 }, { name: 'ZZZZ', class: 'ZZZZZZZZ', age: 16 }]))


// enums 

// type emun = 'up' | 'down' | 'left' | 'right'
// const func = (keyPressed: emun) => {
//     if (keyPressed == 'up') {
//         console.log(keyPressed,)
//     }
// }

// func("up")
// func("down")
// func("left")
// // wrong
// // func("rigdht")
// // correct
// func("right")


// generics
// type Input = string
// the above code works fine but the below code does not (bcoz TS does not actually identify by itself after returning that whether its a string or a number , so toUPercase() does jot work for below syntax)
// type Input = string | number
// const firstEl = (arr: Input[]) => {
//     return arr[0];
// }

// console.log(firstEl(['asas', 'jhfuj']).toUpperCase()) 


// const takefunc = <T>(arg: T) => {
//     return arg
// }

// let ut1 = takefunc<string>("ajhfehgfuyie")
// let ut2 = takefunc<number>(24)
// console.log(ut1)
// console.log(ut2)

function getElem<T>(arr: T[]) {
    return arr[0];
}

interface User {
    name: string
}

const el = getElem<User>([{ name: "djhfbhjdasfb" }])
const el2 = getElem([1, 2])
const el3 = getElem([true, false])

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

type allarray = {
    name: string, class: string, age: number
}

const filterfunc = (arrinput: allarray[]) => {

    return arrinput.filter(each => each.age >= 16)

}

console.log(filterfunc([{ name: 'asdasda', class: 'afaas', age: 12 }, { name: 'SEEE', class: 'SSSSSSS', age: 15 }, { name: 'XXX', class: 'XXXXXX', age: 17 }, { name: 'ZZZZ', class: 'ZZZZZZZZ', age: 16 }]))

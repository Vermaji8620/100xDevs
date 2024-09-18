interface User {
    name: string
    age: number
}

function sumofage(user1: User, user2: User) {
    return user1.age + user2.age
}

console.log(sumofage({ name: "aditya", age: 36 }, { name: "verma", age: 45 }))
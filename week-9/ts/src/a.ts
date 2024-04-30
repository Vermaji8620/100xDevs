interface User {
    firstName: string,
    lastName: string,
    // optional thing
    email?: string,
    age: number,
}

const user = {
    firstName: "aditya",
    lastName: "verma",
    email: "aditya@gmail.com",
    age: 22
}

const isLegal = (userr: User) => {

    console.log(userr.age > 18 ? 'fine age' : 'underage')

}

isLegal(user)
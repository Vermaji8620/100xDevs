// interface User {
//     name: string
//     age: number
// }

// function sumofage(user1: User, user2: User) {
//     return user1.age + user2.age
// }

// console.log(sumofage({ name: "aditya", age: 36 }, { name: "verma", age: 45 }))


interface User {
    id: string,
    name: string,
    age: string,
    email: string,
    password: string,
}

// for selecting particular fields
type updateProps = Pick<User, 'name' | 'email' | 'age'>

// for making those fields optional
type updatePropsOptional = Partial<updateProps>


// function updateUser(updatedProps: updateProps) {
//     console.log(updatedProps.name + " " + updatedProps.email + " " + updatedProps.age)
// }

function updateUser(updatedProps: updatePropsOptional) {
    console.log(updatedProps.name + " " + updatedProps.email + " " + updatedProps.age)
}

updateUser(
    {
        name: "adadjadajdh"
    }
)
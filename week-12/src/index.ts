// interface User {
//     name: string
//     age: number
// }

// function sumofage(user1: User, user2: User) {
//     return user1.age + user2.age
// }

// console.log(sumofage({ name: "aditya", age: 36 }, { name: "verma", age: 45 }))


// ----------------------------------------------------------------------------------

// interface User {
//     id: string,
//     name: string,
//     age: string,
//     email: string,
//     password: string,
// }

// // for selecting particular fields
// type updateProps = Pick<User, 'name' | 'email' | 'age'>

// // for making those fields optional
// type updatePropsOptional = Partial<updateProps>


// // function updateUser(updatedProps: updateProps) {
// //     console.log(updatedProps.name + " " + updatedProps.email + " " + updatedProps.age)
// // }

// function updateUser(updatedProps: updatePropsOptional) {
//     console.log(updatedProps.name + " " + updatedProps.email + " " + updatedProps.age)
// }

// updateUser(
//     {
//         name: "adadjadajdh"
//     }
// )

// ----------------------------------------------------------------------------------

// interface Config {
//     endpoint: string,
//     apiKey: string,
// }

// const config: Readonly<Config> = {
//     endpoint: 'something_something',
//     apiKey: '223434344334'
// }

// if yu do not add Readonly, then it lets you change the internal values, but not in the case of Readonly......when you use ReadOnly, then inside parameters cant be changed
// config.apiKey = '112112'


// ----------------------------------------------------------------------------------

// mapping ( key : value ) pairs using Record

// interface UserType {
//     id: string,
//     username: string
// }

// // interface User {
// //     [key: string]: UserType
// // }

// // OR 

// type User = Record<string, UserType>

// const users: User = {
//     'some@': {
//         id: 'some@',
//         username: 'verma',
//     },
//     '@some': {
//         id: '@some',
//         username: 'aditya',
//     }
// }


// ----------------------------------------------------------------------------------

// mapping ( key : value ) pairs using maps

// interface UserType {
//     id: string,
//     username: string
// }

// const usersMap = new Map<string, UserType>()

// usersMap.set('first', { id: "11111", username: "username" })

// ----------------------------------------------------------------------------------

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.number().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
    const result = userProfileSchema.safeParse(req.body);
    const updateBodytype: FinalUserSchema = req.body;
    if (!result.success) {
        res.status(400).json({ error: result.error });
        return;
    }

    // Type of updateBody is inferred from userProfileSchema
    const updateBody = result.data;

    // update database here
    res.json({
        message: "User updated",
        updateBody
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));

// ----------------------------------------------------------------------------------

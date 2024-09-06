import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// ----------------------- user  ---------------------------------

const insertUser = async (userName: string, password: string, firstName: string, lastName: string) => {
    const nrew = await prisma.user.create({
        data: {
            email: userName, password, firstName, lastName
        }
    })
    console.log(nrew)
    return nrew;
}

// insertUser("raj@raj.raj", "raj", "rajfist", "rajsecond").then(async () => {
//     console.log("done")
// }).catch(async () => {
//     console.log("not done")
// })

const getUser = async (argpassed: string) => {
    const allUser = await prisma.user.findUnique(
        {
            where: {
                email: argpassed
            }
        }
    )
    console.log(allUser)
}

// getUser('verma@verma.verma');

const updateTheUser = async () => {
    await prisma.user.update({
        where: {
            email: 'verma@verma.verma'
        },
        data: {
            email: 'aditya@aditya.aditya',
            password: 'aditya',
            firstName: 'adityafirst',
            lastName: 'adityalast'
        }
    })
}

// updateTheUser()


const deleteUser = async (arfg: string) => {
    await prisma.user.deleteMany({
        where: {
            lastName: arfg
        }
    })
}

// deleteUser('rajsecond')

// ------------------------------- post -----------------------------

const createPost = async (idGot: number) => {
    await prisma.todo.create({
        data: {
            title: "this is second aditya title",
            description: "this is second aditya description",
            done: false,
            authorId: idGot,
        }
    })
}

// createPost(4)

const getUserPost = async (userId: number) => {

    const findTodos = await prisma.todo.findMany({
        where: {
            authorId: userId
        },
    })

    console.log(findTodos);

}

// getUserPost(5)


const updateTodo = async (userId: number, postId: number) => {
    await prisma.todo.update({
        where: {
            authorId: userId,
            id: postId
        },
        data: {
            title: "first verma title changed",
            description: "first verma desc changed"
        }
    })
}

// updateTodo(5, 8)

const deleteTodo = async (userId: number, postId: number) => {

    await prisma.todo.delete({
        where: {
            authorId: userId,
            id: postId
        }
    })

}

// deleteTodo(8, 7); 
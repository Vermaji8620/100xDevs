import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const insertUser = async (userName: string, password: string, firstName: string, lastName: string) => {
    const nrew = await prisma.user.create({
        data: {
            email: userName, password, firstName, lastName
        }
    })
    console.log(nrew)
}

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

const deleteUser = async (arfg: string) => {
    await prisma.user.deleteMany({
        where: {
            lastName: arfg
        }
    })
}

// deleteUser('rajsecond')

// updateTheUser()

// getUser('verma@verma.verma');

insertUser("verma@verma.verma", "verma", "vermafist", "vermasecond").then(async () => {
    console.log("done")
}).catch(async () => {
    console.log("not done")
})


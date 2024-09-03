import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://test_owner:DTJkPzC48lnj@ep-gentle-wildflower-a5kv384u.us-east-2.aws.neon.tech/test?sslmode=require"
})

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

        `)
    console.log(result)
}

// createUsersTable()

async function enterDetails() {
    await client.connect()
    const insertQuery = `INSERT INTO users (username, email , password) VALUES ($1, $2, $3)`
    const result = await client.query(insertQuery, ['xxxxxx', 'xxxxx@xxxxx.com', 'xxxxxx'])
    console.log(result)
    console.log("jhsdf")
    if (result.rows.length > 0) {
        console.log("HO gaya")
    }
}

enterDetails()
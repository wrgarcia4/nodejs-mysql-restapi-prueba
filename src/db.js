import { createPool } from "mysql2/promise"
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
    
     // Replace with your database name
} from './config.js'
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,  // Maximum number of connections
    database: DB_DATABASE
})
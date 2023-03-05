import { config } from 'dotenv';

config();

export const databaseConfig = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   port: process.env.DB_PORT,
};

export const PORT = process.env.PORT;

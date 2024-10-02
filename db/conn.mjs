import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config(
  '/home/shikhar/Documents/gfg/mongodb-express-rest-api-example/server/.env'
);

console.log('ENV VARIABLES LOADED:::', !!process.env.ATLAS_URI);

const connectionString = process.env.ATLAS_URI || '';

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db('gfgDb');

export default db;

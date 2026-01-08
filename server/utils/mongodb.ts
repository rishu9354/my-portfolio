import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
let client : MongoClient;

export async function getDB(){
    if(!client){
        client = new MongoClient(uri);
        await client.connect();
    }
    return client.db('portfolio')
}
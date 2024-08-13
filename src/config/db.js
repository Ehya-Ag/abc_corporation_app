// /**
//  * Ce fichier configure et établit la connexion à la DB MongoDB
//  * // db.js */
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // L'URI de la base de données MongoDB
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('abc_corporation');
        console.log('Connecté à la base de données MongoDB');
    } catch (error) {
        console.error('Erreur de connexion à la base de données', error);
    }
}

function getDB() {
    if (!db) {
        throw new Error('La base de données n\'est pas encore connectée');
    }
    return db;
}

module.exports = { connectDB, getDB };

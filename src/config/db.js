const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'abc_corporation';

let db = null;

async function connectDB() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connecté à la base de données MongoDB");
        db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données:", error);
        throw error;  // Relancer l'erreur pour qu'elle soit gérée ailleurs si nécessaire
    }
}

module.exports = { connectDB };

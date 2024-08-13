const { MongoClient, ObjectId } = require('mongodb');

// URL de connexion MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'abc_corporation';
let db;

// Connexion à MongoDB
async function connectDB() {
    if (!db) {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db(dbName);
    }
    return db;
}
// Fonction pour créer une nouvelle réponse
async function createAnswer(idAnswer, questionId, options) {
    const db = await connectDB();
    const newAnswer = {
        idAnswer,
        questionId,
        options
    };
    await db.collection('answers').insertOne(newAnswer);
    console.log("Réponse créée avec succès:", newAnswer);
}

// Fonction pour lire toutes les réponses
async function readAllAnswers() {
    const db = await connectDB();
    const answers = await db.collection('answers').find().toArray();
    console.log("Liste des réponses:", answers);
}

// Fonction pour lire une réponse par son ID
async function readAnswerById(idAnswer) {
    const db = await connectDB();
    const answer = await db.collection('answers').findOne({ idAnswer });
    if (answer) {
        console.log("Réponse trouvée:", answer);
    } else {
        console.log("Réponse non trouvée pour l'ID:", idAnswer);
    }
}

// Fonction pour mettre à jour une réponse
async function updateAnswer(idAnswer, updatedData) {
    const db = await connectDB();
    const result = await db.collection('answers').updateOne(
        { idAnswer },
        { $set: updatedData }
    );
    if (result.matchedCount > 0) {
        console.log("Réponse mise à jour avec succès:", updatedData);
    } else {
        console.log("Réponse non trouvée pour l'ID:", idAnswer);
    }
}

// Fonction pour supprimer une réponse
async function deleteAnswer(idAnswer) {
    const db = await connectDB();
    const result = await db.collection('answers').deleteOne({ idAnswer });
    if (result.deletedCount > 0) {
        console.log("Réponse supprimée avec succès pour l'ID:", idAnswer);
    } else {
        console.log("Réponse non trouvée pour l'ID:", idAnswer);
    }
}

// Exporter les fonctions pour les utiliser dans d'autres fichiers
module.exports = {
    createAnswer,
    readAllAnswers,
    readAnswerById,
    updateAnswer,
    deleteAnswer
};

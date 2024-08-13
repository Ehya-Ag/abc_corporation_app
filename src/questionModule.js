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

// Fonction pour créer une question
async function createQuestion(idQuestion, surveyId, title, type, options = null) {
    const db = await connectDB();
    const newQuestion = {
        idQuestion,
        surveyId,
        title,
        type,
        options,
    };
    const result = await db.collection('questions').insertOne(newQuestion);
    console.log("Question créée avec succès:", result.ops[0]);
}

// Fonction pour lire toutes les questions
async function readAllQuestions() {
    const db = await connectDB();
    const questions = await db.collection('questions').find().toArray();
    console.log("Liste des questions:", questions);
}

// Fonction pour lire une question par ID
async function readQuestionById(idQuestion) {
    const db = await connectDB();
    const question = await db.collection('questions').findOne({ idQuestion });
    if (question) {
        console.log("Question trouvée:", question);
    } else {
        console.log("Question non trouvée pour l'ID:", idQuestion);
    }
}

// Fonction pour mettre à jour une question
async function updateQuestion(idQuestion, updatedData) {
    const db = await connectDB();
    const result = await db.collection('questions').updateOne({ idQuestion }, { $set: updatedData });
    if (result.matchedCount > 0) {
        console.log("Question mise à jour avec succès");
    } else {
        console.log("Question non trouvée pour l'ID:", idQuestion);
    }
}

// Fonction pour supprimer une question
async function deleteQuestion(idQuestion) {
    const db = await connectDB();
    const result = await db.collection('questions').deleteOne({ idQuestion });
    if (result.deletedCount > 0) {
        console.log("Question supprimée avec succès");
    } else {
        console.log("Question non trouvée pour l'ID:", idQuestion);
    }
}

module.exports = { createQuestion, readAllQuestions, readQuestionById, updateQuestion, deleteQuestion };

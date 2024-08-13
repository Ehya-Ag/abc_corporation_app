const { MongoClient } = require('mongodb');

// Connexion à la base de données
const url = 'mongodb://localhost:27017';
const dbName = 'abc_corporation';


async function insertSurvey(survey) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connecté à la base de données");

        const db = client.db(dbName);
        const collection = db.collection('surveys');

        const existingSurvey = await collection.findOne({ idSurvey: survey.idSurvey });
        if (existingSurvey) {
            console.log("Une enquête avec cet idSurvey existe déjà:", survey.idSurvey);
            return;
        }

        // Insérer la nouvelle enquête
        await collection.insertOne(survey);
        console.log("Enquête insérée avec succès:", survey);

    } catch (err) {
        console.error("Erreur lors de l'insertion de l'enquête:", err);
    } finally {
        await client.close();
    }
}

// Fonction pour afficher toutes les enquêtes
async function getAllSurveys() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connecté à la base de données");

        const db = client.db(dbName);
        const collection = db.collection('surveys');

        const surveys = await collection.find({}).toArray();
        console.log("Liste des enquêtes:", surveys);

    } catch (err) {
        console.error("Erreur lors de la récupération des enquêtes:", err);
    } finally {
        await client.close();
    }
}

// Fonction pour afficher une enquête par idSurvey
async function getSurveyById(idSurvey) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connecté à la base de données");

        const db = client.db(dbName);
        const collection = db.collection('surveys');

        const survey = await collection.findOne({ idSurvey: idSurvey });
        if (survey) {
            console.log("Enquête trouvée:", survey);
        } else {
            console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
        }

    } catch (err) {
        console.error("Erreur lors de la récupération de l'enquête:", err);
    } finally {
        await client.close();
    }
}

// Fonction pour mettre à jour une enquête par idSurvey
async function updateSurvey(idSurvey, updatedData) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connecté à la base de données");

        const db = client.db(dbName);
        const collection = db.collection('surveys');

        const result = await collection.updateOne(
            { idSurvey: idSurvey }, 
            { $set: updatedData }
        );

        if (result.matchedCount > 0) {
            console.log("Enquête mise à jour avec succès pour l'idSurvey:", idSurvey);
        } else {
            console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
        }

    } catch (err) {
        console.error("Erreur lors de la mise à jour de l'enquête:", err);
    } finally {
        await client.close();
    }
}

// Fonction pour supprimer une enquête par idSurvey
async function deleteSurvey(idSurvey) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connecté à la base de données");

        const db = client.db(dbName);
        const collection = db.collection('surveys');

        const result = await collection.deleteOne({ idSurvey: idSurvey });

        if (result.deletedCount > 0) {
            console.log("Enquête supprimée avec succès pour l'idSurvey:", idSurvey);
        } else {
            console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
        }

    } catch (err) {
        console.error("Erreur lors de la suppression de l'enquête:", err);
    } finally {
        await client.close();
    }
}

// Export des fonctions pour les utiliser dans d'autres fichiers
module.exports = {
    insertSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};

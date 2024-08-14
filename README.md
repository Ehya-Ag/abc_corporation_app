
# ABC_CORPORATION_APP

## Description

ABC_CORPORATION_APP est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches d'enquête, questions et réponses.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <URL_DU_REPOSITORY>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd abc_corporation_app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/db.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```
Ou

```bash
node index.js
```

## Documentation des Fonctions

### `insertSurvey(survey)`

**Description** : Ajoute une nouvelle enquête dans la base de données.

**Paramètres** :
- `survey` (Object) : Un objet représentant l'enquête avec les propriétés suivantes :
  - `idSurvey` (Number) : Identifiant unique de l'enquête.
  - `name` (String) : Nom de l'enquête.
  - `description` (String) : Description de l'enquête.
  - `createdAt` (String) : Date de création de l'enquête.
  - `createdBy` (Object) : Informations sur la personne ayant créé l'enquête, avec les propriétés :
    - `employeeName` (String) : Nom de l'employé.
    - `employeeRole` (String) : Rôle de l'employé.

**Valeur de Retour** : Un message indiquant si l'ajout a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
insertSurvey({
    idSurvey: 2, 
    name: "Enquête de Satisfaction 002",
    description: "Deuxième enquête visant à évaluer la satisfaction des clients.",
    createdAt: "2024-08-13T10:00:00Z",
    createdBy: {
        employeeName: "Ehya Ag Mohamed",
        employeeRole: "Chef de projet"
    }
});
```

### `getAllSurveys()`

**Description** : Récupère toutes les enquêtes présentes dans la base de données.

**Paramètres** : Aucun.

**Valeur de Retour** : Un tableau d'objets représentant chaque enquête.

**Exemple d'Utilisation** :

```javascript
getAllSurveys();
```

### `getSurveyById(idSurvey)`

**Description** : Récupère une enquête spécifique par son identifiant.

**Paramètres** :
- `idSurvey` (Number) : Identifiant unique de l'enquête.

**Valeur de Retour** : L'objet représentant l'enquête correspondante, ou `null` si aucune enquête n'est trouvée.

**Exemple d'Utilisation** :

```javascript
getSurveyById(1);
```

### `updateSurvey(idSurvey, updateData)`

**Description** : Met à jour les informations d'une enquête existante.

**Paramètres** :
- `idSurvey` (Number) : Identifiant unique de l'enquête à mettre à jour.
- `updateData` (Object) : Un objet contenant les nouvelles valeurs pour les propriétés à mettre à jour.

**Valeur de Retour** : Un message indiquant si la mise à jour a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
updateSurvey(2, { name: "Enquête de Satisfaction 002 - Mise à Jour", description: "Mise à jour du projet par Ehya." });
```

### `deleteSurvey(idSurvey)`

**Description** : Supprime une enquête de la base de données par son identifiant.

**Paramètres** :
- `idSurvey` (Number) : Identifiant unique de l'enquête à supprimer.

**Valeur de Retour** : Un message indiquant si la suppression a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
deleteSurvey(2);
```

### `createQuestion(idSurvey, title, type, options)`

**Description** : Ajoute une nouvelle question à une enquête.

**Paramètres** :
- `idSurvey` (Number) : Identifiant unique de l'enquête à laquelle la question est ajoutée.
- `title` (String) : Intitulé de la question.
- `type` (String) : Type de la question (par exemple, `rating`, `boolean`, `multiple choice`).
- `options` (Object) : Options spécifiques en fonction du type de la question (ex. pour `rating`, `{ minValue: 1, maxValue: 10, step: 1 }`).

**Valeur de Retour** : Un message indiquant si l'ajout a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
createQuestion(4, "Quelle est votre satisfaction globale ?", "rating", { minValue: 1, maxValue: 10, step: 1 });
```

### `readAllQuestions()`

**Description** : Récupère toutes les questions présentes dans la base de données.

**Paramètres** : Aucun.

**Valeur de Retour** : Un tableau d'objets représentant chaque question.

**Exemple d'Utilisation** :

```javascript
readAllQuestions();

```

### `readQuestionById(idQuestion)`

**Description** : Récupère une question spécifique par son identifiant.

**Paramètres** :
- `idQuestion` (Number) : Identifiant unique de la question.

**Valeur de Retour** : L'objet représentant la question correspondante, ou `null` si aucune question n'est trouvée.

**Exemple d'Utilisation** :

```javascript
readQuestionById(1);

```

### `updateQuestion(idQuestion, updateData)`

**Description** : Met à jour les informations d'une question existante.

**Paramètres** :
- `idQuestion` (Number) : Identifiant unique de la question à mettre à jour.
- `updateData` (Object) : Un objet contenant les nouvelles valeurs pour les propriétés à mettre à jour.

**Valeur de Retour** : Un message indiquant si la mise à jour a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
updateQuestion(4, { title: "Comment évalueriez-vous notre service ? (Mise à jour)" });
```

### `deleteQuestion(idQuestion)`

**Description** : Supprime une question de la base de données par son identifiant.

**Paramètres** :
- `idQuestion` (Number) : Identifiant unique de la question à supprimer.

**Valeur de Retour** : Un message indiquant si la suppression a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
deleteQuestion(4);
```

### `createAnswer(idSurvey, idQuestion, options)`

**Description** : Ajoute une nouvelle réponse à une question dans une enquête.

**Paramètres** :
- `idSurvey` (Number) : Identifiant unique de l'enquête à laquelle la réponse est ajoutée.
- `idQuestion` (Number) : Identifiant unique de la question à laquelle la réponse est associée.
- `options` (Array) : Un tableau d'objets représentant les réponses possibles.

**Valeur de Retour** : Un message indiquant si l'ajout a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
createAnswer(2, 1, [
    { title: "Très satisfait" },
    { title: "Satisfait" },
    { title: "Neutre" }
]);
```

### `readAllAnswers()`

**Description** : Récupère toutes les réponses présentes dans la base de données.

**Paramètres** : Aucun.

**Valeur de Retour** : Un tableau d'objets représentant chaque réponse.

**Exemple d'Utilisation** :

```javascript
readAllAnswers();
```

### `readAnswerById(idAnswer)`

**Description** : Récupère une réponse spécifique par son identifiant.

**Paramètres** :
- `idAnswer` (Number) : Identifiant unique de la réponse.

**Valeur de Retour** : L'objet représentant la réponse correspondante, ou `null` si aucune réponse n'est trouvée.

**Exemple d'Utilisation** :

```javascript
const answer = readAnswerById(1);
console.log(answer);
```

### `updateAnswer(idAnswer, updateData)`

**Description** : Met à jour les informations d'une réponse existante.

**Paramètres** :
- `idAnswer` (Number) : Identifiant unique de

 la réponse à mettre à jour.
- `updateData` (Object) : Un objet contenant les nouvelles valeurs pour les propriétés à mettre à jour, telles que :
  - `options` (Array) : Un tableau d'objets représentant les nouvelles options de réponse.

**Valeur de Retour** : Un message indiquant si la mise à jour a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
updateAnswer(1, { options: [
    { title: "Extrêmement satisfait" },
    { title: "Satisfait" },
    { title: "Neutre" }
] });
```

### `deleteAnswer(idAnswer)`

**Description** : Supprime une réponse de la base de données par son identifiant.

**Paramètres** :
- `idAnswer` (Number) : Identifiant unique de la réponse à supprimer.

**Valeur de Retour** : Un message indiquant si la suppression a réussi ou a échoué.

**Exemple d'Utilisation** :

```javascript
deleteAnswer(1);
```

## Authors

Ehya Ag Mohamed

---

Ce README complet documente toutes les fonctions disponibles dans les modules `surveyModule`, `questionModule`, et `answerModule`, en fournissant des descriptions claires, les paramètres requis, les valeurs de retour, et des exemples d'utilisation pour chaque fonction.# abc_corporation_app


Création de l'environnement node js: (se placer dans le répertoire du projet)

> npm init -y

Ouvrir le projet dans VScode

Cette commande va créer la configuration de base du projet dans package.json
 => modifier le fichier "main": "index.js" par "server.js"
 => ajouter dans "scripts" la commande "start-dev": "nodemon server.js"
 
Créer le fichier "server.js à la racine du projet

Installer les différentes dépendances nécessaires au projet:
> npm install express --save
> npm install sequelize-cli --save
> npm install sequelize --save
> npm install mysql2 --save

Installation de l'outil d'execution automatique en mode dev:
> npm install nodemon --save-dev (ou -g pour une installation dans nodejs global)

Créer un base de données en ligne de commande ou par phpMyadmin

Initialiser la configuration de sequelize avec la base de données
> sequelize init (voir le module npx pour : "npx sequelize init")
Cette commande va créer une arborescence et un fichier de configuration de la bdd
 => modifer ce fichier pour qu'il corresponde à la base (username, password, name base...)
 
----------------------------

Création des tables de la bdd avec Sequelize
> sequelize model:create --attributes "<nom_champ1>:<type> <nom_champ2>:<type>" --name <nom_table>
ex: sequelize model:create --attributes "username:string email:string" --name User

Dans les fichier de migrations ajouter l'option "allowNull: false/true" sur tous les champs (false pour les champs obligatoires)

Effectuer la migration en bdd:
> sequelize db:migrate

- installation de la dépendance "body-parser" npm install body-parser --save

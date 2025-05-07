import "dotenv/config";
//import { notFound, errorHandler } from "./app/middlewares/errorHandlers.js";
import express from "express";
//import cors from "cors";

import { router } from "./app/router.js";

// Création de l'application
const app = express();
app.use(express.json());

/*app.use(
    cors({
        // Les URL autorisés à nous requêter
        origin: [
            'http://localhost:5500',
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:5174',
            'http://127.0.0.1:5174',
        ]
    })
);*/

// Mise en place du router
app.use(router);

// Gestion d'erreur
//app.use(notFound);    
//app.use(errorHandler);

// Démarrage du serveur
const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`🚀 API demarrée à l'adresse : http://localhost:${port}`);


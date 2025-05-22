import { Router } from "express";
import { coffeeController } from "./controllers/Coffee.js";

const router = Router();

// route pour afficher tout les cafés 
router.get("/coffee", coffeeController.getAllCoffee);

// route pour afficher les café par id
router.get("/coffee/:id", coffeeController.getCoffeeById);

export { router };
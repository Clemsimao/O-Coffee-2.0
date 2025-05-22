import  Coffee  from "../models/Coffee.js"

const coffeeController= {
    async getAllCoffee(_req, res) {
        const coffee = await Coffee.findAll({
            order: [['id', 'ASC']],
        });
        res.json(coffee);
    },

    async getCoffeeById(req, res) {
        const { id } = req.params;
        const coffee = await Coffee.findByPk(id);
        res.json(coffee);
    },
};

export { coffeeController };
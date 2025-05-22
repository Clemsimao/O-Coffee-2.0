import axios from "axios";
import type Coffee  from "../types/Coffee.ts";

// fichier pour centraliser tous les appels API

export const getAllCoffees = async (): Promise<Coffee[]> => {
    const response = await axios.get('http://localhost:3000/coffee');
    return response.data;
};

export const getCoffeeById = async (id: number): Promise<Coffee> => {
    const response = await axios.get(`http://localhost:3000/coffee/${id}`);
    return response.data;
};
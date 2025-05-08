import { Link } from "react-router-dom";
import type Coffee from "../types/Coffee.ts";

interface newCoffeeProps {
    newCoffee: Coffee[];
}

const NewCoffeeSection = ({ newCoffee }: newCoffeeProps) => {
    return (
        <section className="nouveautes">
                <h2>Nouveautés :</h2>
                <ul>
                    {newCoffee.map(coffee => (
                        <li key={coffee.id}>
                            <h3>{coffee.nom}</h3>
                            <img src={`/images/coffees/${coffee.reference}.webp`} alt={`Café ${coffee.nom}`}/>
                            <Link className='button' to={`/produit/${coffee.id}`}>Découvrir</Link>
                        </li>
                    ))}
                </ul>
            </section>
    );
};

export default NewCoffeeSection;

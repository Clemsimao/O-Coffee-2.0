import '../../public/css/reset.css'
import '../../public/css/style.css'
import { Link } from 'react-router-dom';
import type Coffee from '../types/Coffee.ts';
import NewCoffeeSection from '../components/NewCoffeeSection.tsx';


interface HomeProps {
    newCoffee: Coffee[];
}

const Home = ({ newCoffee }: HomeProps) => {
    return (
        <main>
            <h1>Bienvenue chez O'Coffee</h1>
            <p>Bienvenue dans notre boutique, où règne une ambiance chaleureuse et accueillante qui éveille tous vos sens. Dès que vous franchissez la porte, vous êtes enveloppé d'une douce symphonie d'arômes envoûtants de café fraîchement moulu.</p>
            <p>Jean et Jacques Pepper, deux frères passionnés par le café, sont les fondateurs de notre boutique. Avec une expertise approfondie et un amour profond pour cette délicieuse boisson, ils ont créé un espace où le café est célébré comme une expérience raffinée et inspirante.</p>
            <Link to="/catalogue" className="button">Voir le catalogue</Link>
            <img className="image-accueil" src="/images/about.webp" alt="Image de présentation de café" />
            <NewCoffeeSection newCoffee={newCoffee}/>
            <section className='localisation'>
            <h2>Comment nous trouver ?</h2>
            <div id="map"></div>
            </section>
        </main>
    );
};

export default Home;
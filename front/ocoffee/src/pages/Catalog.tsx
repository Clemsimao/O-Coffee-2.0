import '../../public/css/reset.css'
import '../../public/css/style.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type Coffee from '../types/Coffee.ts';

interface CatalogProps {
    catalogList: Coffee[];
}

const Catalog = ({ catalogList }: CatalogProps) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <main>
            <section className="haut-catalogue">
                <h1>Notre catalogue</h1>
                <p>Découvrez notre sélection de cafés exceptionnels.</p>
            </section>
            <section>
                <div className="container-produit">
                    {(showAll ? catalogList : catalogList.slice(0, 6)).map((product, index) => (
                        <article
                            key={product.id}
                            className="produit"
                        >
                            <h2 className="coffee-name-catalogue">{product.nom}</h2>
                            <img
                                src={`/images/coffees/${product.reference}.webp`}
                                alt={`café ${product.nom}`}
                            />
                            <Link to={`/produit/${product.id}`} className="button">
                                Découvrir le café
                            </Link>
                        </article>
                    ))}
                </div>
                {showAll ? (
                    <div className="container-voir-catalogue">
                        <button id="boutton-marron" onClick={() => setShowAll(false)}>
                            Réduire le catalogue
                        </button>
                    </div>
                ) : (
                    <div className="container-voir-catalogue">
                        <button id="boutton-marron" onClick={() => setShowAll(true)}>
                            Voir tout le catalogue
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Catalog;
import "../../public/css/reset.css";
import "../../public/css/style.css";
import { Link} from "react-router-dom";
import type Coffee from "../types/Coffee.ts";

interface ProductProps {
  product: Coffee;
}

const Product = ({ product }: ProductProps) => {

  return (
    <main className="product-page">
      <div className="product-image-container">
        <img
          className="fixed-size-img"
          src={`/images/coffees/${product.reference}.webp`}
          alt={`café ${product.nom}`}
        />
      </div>
      <section className="product-details">
        <h1 className="product-title">
          {product.nom} - Origine : {product.origine}
        </h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          Prix au kilo : {product.prix_au_kilo} € - Ajouté le 10/03/2025
        </p>
        <p className="product-feature">
          Caractéristique principale : {product.caracteristique_principale}
        </p>
        <Link id="boutton-marron" className="back-button" to="/catalogue">
          Retour vers le catalogue
        </Link>
      </section>
    </main>
  );
};

export default Product;

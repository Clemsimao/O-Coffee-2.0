import "../../public/css/reset.css";
import "../../public/css/style.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <h1>Erreur 404 : Page introuvable</h1>
        <p>
          Il semblerait que cette page ait disparu, comme un expresso bu trop
          vite...
        </p>
        <img src="/images/404.webp" alt="café renversé" />
        <Link id="boutton-marron" to="/">
          Retour à l'accueil
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;

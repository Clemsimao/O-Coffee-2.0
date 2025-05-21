import "../../public/css/reset.css";
import "../../public/css/style.css";


const ContactForm = () => {
    return (
        <section className="contact-section">
    <h1>Contactez-nous</h1>
    <p>Vous avez une question ? Remplissez ce formulaire et nous vous répondrons rapidement !</p>

    <form id="contact-form" className="contact-form">
        <fieldset>
            <legend>Envoyez-nous un message</legend>
            
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required/>

            <label htmlFor="title">Sujet</label>
            <input type="text" id="title" name="title" placeholder="Sujet de votre message" required/>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message ici..." required></textarea>

            <button type="submit" className="btn-submit">Envoyer</button>
        </fieldset>
    </form>

    <div className="contact-info">
        <h2>Nos coordonnées</h2>
        <p><strong>Email :</strong> contact@ocoffee.com</p>
        <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
        <p><strong>Adresse :</strong> 123 Rue du Café, 62416 Hautecloque</p>
    </div>
</section>
    );
};

export default ContactForm;
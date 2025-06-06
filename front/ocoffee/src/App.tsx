import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCoffees } from './services/coffeeService';
import type Coffee  from './types/Coffee';
import Home from './pages/Home';
import Catalog from './pages/Catalog.tsx';
import ContactForm from './pages/Contact.tsx';
import NotFoundPage from './pages/404.tsx';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import ProductWrapper from './components/productLoader';

const App = () => {
    const [allCoffees, setAllCoffees] = useState<Coffee[]>([]);
    const [featured, setFeatured] = useState<Coffee[]>([]);

    useEffect(() => {
        getAllCoffees().then(data => {
            setAllCoffees(data);
            setFeatured(data.slice(0, 3));
        });
    }, []);

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home newCoffee={featured} />} />
                {/* Tu pourras ajouter d’autres routes ici */}
                <Route path="/catalogue" element={<Catalog catalogList={allCoffees} />} />
                <Route path="/produit/:id" element={<ProductWrapper allCoffees={allCoffees} />} />
                <Route path="/contact" element={<ContactForm/>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
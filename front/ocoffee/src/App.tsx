import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCoffees } from './services/coffeeService';
import type Coffee  from './types/Coffee';
import Home from './pages/Home';

const App = () => {
    const [featured, setFeatured] = useState<Coffee[]>([]);

    useEffect(() => {
        getAllCoffees().then(data => setFeatured(data.slice(0, 3))); // Prendre les 3 premiers
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home newCoffee={featured} />} />
                {/* Tu pourras ajouter d’autres routes ici */}
            </Routes>
        </Router>
    );
};

export default App;
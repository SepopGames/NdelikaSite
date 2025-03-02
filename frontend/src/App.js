import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HEADERS/Header';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import NewsList from './Pages/NewsList';  // Импортируем новый компонент


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<NewsList />} />
                <Route path="/contacts" element={<Contacts />} />
               

            </Routes>
        </Router>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact'
import Projects from './Projects';
import Header from './Header'
import Home from './Home';
import Used from './Used';
import Products from './Products';
import Team from './Team';
import Laptop from './Laptop';
import Desktop from './Desktop';
import Monitors from './Monitors';
import GamingPc from './GamingPc';
import Accessories from './Accessories';
import AllInOne from './AllInOne';
import Software from './Software';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/projects" exact element={<Projects />} >
                    <Route path="laptop" element={<Laptop />} />
                    <Route path="desktop" element={<Desktop />} />
                    <Route path="monitors" element={<Monitors />} />
                    <Route path="gaming" element={<GamingPc />} />
                    <Route path="accessories" element={<Accessories />} />
                    <Route path="allinone" element={<AllInOne />} />
                    <Route path="software" element={<Software />} />
                </Route>
                <Route path="/used" exact element={<Used />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/team" exact element={<Team />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
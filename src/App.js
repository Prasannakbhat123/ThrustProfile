// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileList from './components/Profile/ProfileList';
import About from './components/About/About';
import CardList from "./components/Cards/CardList";
import CardDetails from "./components/Cards/CardDetails";

function App() {
    return (
        <Router>
            <div className="App">

                <Routes>
                    <Route path="/" element={<ProfileList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cards" element={<CardList />} />
        <Route path="/details/:id" element={<CardDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Test/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

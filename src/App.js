import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Mainform from './pages/Mainform';
import Foot from './components/Foot';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="*" element={<Mainform />} />
                <Route path="/Foot" element={<Foot />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
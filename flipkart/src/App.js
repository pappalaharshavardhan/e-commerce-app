
import React from 'react';
import './App.css';
import MainPage from './flipkartfolder/pages/components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from '../src/flipkartfolder/pages/components/SignupPage';
import LoginPage from '../src/flipkartfolder/pages/components/LoginPage';


const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );

export default App;


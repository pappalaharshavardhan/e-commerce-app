import React from 'react'
import { useState } from 'react';

import LoginPage from './LoginPage';




import Header from './Header'
import Banner from './Banner'
import Collection from './Collection'
import Footer from './Footer'
import WomenCollection from './WomenCollection'
import Electronics from './Electronics'
import EectronicsComponents from './EectronicsComponents'
import Grocery from './Grocery'

const MainPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  // Toggle between Sign Up and Login
  const handleToggle = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className="main-container">
    <div className="form-container">
      {/* {isSignup ? <SignupPage /> : <LoginPage />} */}
      <Header/>
      <Banner/>
      <Collection/>
      <WomenCollection/>
      <Electronics/>
      <EectronicsComponents/>
      <Grocery/>
 
      <Footer/>
    </div>
    </div>
    
  
  );
};

export default MainPage

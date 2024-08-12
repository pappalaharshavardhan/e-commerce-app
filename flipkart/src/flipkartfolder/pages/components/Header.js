import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='headerSection'>
        <div className="left">
            <div className='tittel'>
                <img src='asserts/f.png' alt='tittel'/>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Electronics</li>
                <li>Grocery</li>
            </ul>
        </div>
        <div className='Search'>
            <input type='text' placeholder='Search..'/>
        </div>
        <div className="right">
            <div id='signup' className='signin' onClick={() => handleNavigation('/signup')}>Sign up</div>
            <div id='login' className='signin' onClick={() => handleNavigation('/login')}>Login</div>
            <div className='cart'>Cart</div>

        </div>
          </div>
  )
}

export default Header

import React from 'react'

const Header = () => {
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
            <div className='signin'>Signin / Login</div>
            <div className='cart'>Cart</div>

        </div>
          </div>
  )
}

export default Header

import React from 'react'

const Grocery = () => {
  return (
    <div className='grocerysection'>
        <h2>Grocery's</h2>
        <div className='Grocery'>
        <img src='asserts/grocery.jpeg' alt='grocery'/>
        </div>
        <div className='Groceryscollecection'>
        <div className='oil'>
            <h3>Freedom Oil's</h3>
            <img src='asserts/g1.jpeg' alt='oil'/>
        </div>
        <div className='horlicks'>
            <h3>Horlicks's</h3>
            <img src='asserts/g2.jpeg' alt='horlicks'/>
        </div>
        <div className='soap'>
            <h3>Soap's</h3>
            <img src='asserts/g3.jpeg' alt='soap'/>
        </div>
        <div className='friuts'>
            <h3>Appele's</h3>
            <img src='asserts/g4.jpeg' alt='friuts'/>
        </div>
        <div className='milk'>
            <h3>Heritage Milk's</h3>
            <img src='asserts/g5.jpeg' alt='milk'/>
        </div>
        <div className='surfexel'>
            <h3>Surfexel's</h3>
            <img src='asserts/g6.jpeg' alt='surfexel'/>
        </div>
        </div>
        </div>
  )
}

export default Grocery
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Collection from './Collection'
import Footer from './Footer'
import WomenCollection from './WomenCollection'
import Electronics from './Electronics'
import EectronicsComponents from './EectronicsComponents'
import Grocery from './Grocery'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection/>
      <WomenCollection/>
      <Electronics/>
      <EectronicsComponents/>
      <Grocery/>
 
      <Footer/>
    </div>
  )
}

export default MainPage

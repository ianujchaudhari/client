import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Newcollections from '../components/NewCollections/Newcollections'
import NewaLetter from '../components/NewsLetter/NewaLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <NewaLetter/>
    </div>
  )
}

export default Shop
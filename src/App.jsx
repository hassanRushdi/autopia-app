import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import OfferCard from './components/OfferCard'
import VehicleGuide from './components/VehicleGuide'

function App() {

  return (
    <main className=''>
      <Header />
      <NavBar />
      <OfferCard />
      <VehicleGuide />
    </main>
  )
}

export default App

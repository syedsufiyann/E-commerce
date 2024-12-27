import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/Product'

function App() {

  return (
    <>
      <h2 style={{textAlign:"center"}}>E-commerce App</h2>
      <Product/>
    </>
  )
}

export default App

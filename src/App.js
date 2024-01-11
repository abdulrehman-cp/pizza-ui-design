import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero' 
import { productData, productDataTwo } from './components/Products/data'
import Products from './components/Products/Products'
import { GlobalStyle } from './globalStyle'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      {/* <Feature /> */}
      <Products heading='Sweet Treats for You' data={productDataTwo} />
    </BrowserRouter>
  )
}

export default App

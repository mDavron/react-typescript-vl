import React from 'react';
import Product from './components/Product';
import { products } from './data/product'


function App() {
  return (
    <>
      <div className="container mx-auto max-w-4xl ">
        <Product product={products[0]} />
        <Product product={products[1]} />
      </div>
    </>
  );


}

export default App;

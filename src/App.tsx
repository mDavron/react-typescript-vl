import React, { useEffect, useState } from 'react';
import Product from './components/Product';
// import { products } from './data/product'
import axios, { AxiosError } from 'axios';
import { IProduct } from './models/type';


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("")

  async function fetchProducts() {
    try {
      setError("")
      setLoading(true)
      const response = await axios.get('https://fakestoreapi2.com/products?_limit=10');
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false)
      setError(error.message)
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
      <div className="container mx-auto max-w-4xl ">
        {loading && <p className='text-center mt-20'>Loading...</p>}
        {error && <p className='text-center mt-20 text-red-500'>{error}</p>}

        {products?.map((product) => <Product key={product.id} product={product} />
        )}
      </div>
    </>
  );


}

export default App;

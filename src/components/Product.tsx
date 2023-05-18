import React, { useState } from 'react'
import { IProduct } from '../models/type';

interface ProductProps {
  product: IProduct
}

const Product = (props: ProductProps) => {
  const [details, setDetails] = useState(false)
  const { product } = props;
  const { title, image, description, category, price, id, rating } = product;

  const btnBgClassname = !details ? " bg-gray-300 hover:bg-gray-400" : "bg-yellow-400 hover:bg-yellow-300 ";


  return (
    <div className='border py-2 px-2 rounded flex mb-3  items-start gap-12 min-h-[300px]'>
      <div className='h-[200px] w-[200px]'>
        <img src={image} alt={title} className='w-full h-full object-contain' />
      </div>
      <div className='flex flex-col items-start w-1/2 min-h-[300px]'>

        <h3 className='font-bold text-xl'>{title}</h3>
        <span className='font-bold text-sm my-2'>Price: {price} <span className='text-lg'>$</span></span>

        {details && <div>
          <p className='my-2'>{description}</p>
          <p>Rating: <span className='font-bold'>{rating.rate}</span></p>

        </div>}
        <button
          onClick={() => setDetails(!details)}
          className={`${btnBgClassname} py-2 px-4 rounded-md max-w-6xl transition-all mt-2`}>
          {!details ? "Show Details" : "Hide Details"}
        </button>
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../../db/data.json'

export const ProductDetailView = () => {
  const {id : productId} = useParams();
  
  const {id, name, category} = products.find((product) => {
    return product.id === parseInt(productId)
  }) 

  console.log({id, name, category})
  return (
    <div>
      <h2>{name}</h2>
      <p>{category}</p>
      <span>{id}</span>
    </div>
  )
}

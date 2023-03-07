import React from 'react';
import { Link, Outlet, useSearchParams} from 'react-router-dom';
import products from '../../db/data.json';


export const ProductList = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? ''

  const handleInput = ({target}) => {
    const {value} = target
    setSearchParams({q : value})
  } 

  return (
    <div>
      <input type="search" value={query} name="filter" placeholder="Search" onChange={handleInput}/>
      {
        products
        .filter(({ name }) => {
          if(!query) return true
          else {
            const nameLowerCase = name.toLowerCase()
            return nameLowerCase.includes(query.toLowerCase())
          }
        })
        .map(({ id, name} )=> {
          return(
            <Link to={`/shop/${id}`} key={id}>
              <p>{name}</p>
              <hr />
            </Link>
          )
        })
      }
      <Outlet />
    </div>
  )
}

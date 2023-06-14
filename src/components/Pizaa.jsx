import React from 'react'

const Pizaa = ({pizaaObject}) => {
  return (
    <li className='pizza'>
    <img src={pizaaObject.photoName} alt= {pizaaObject.name}  />

    <div>
    <h3> {pizaaObject.name} </h3>
    <p> {pizaaObject.ingredients} </p>
    <span>  {pizaaObject.price} </span>
    
    </div>
      
    </li>
  )
}

export default Pizaa

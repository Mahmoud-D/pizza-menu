import React from 'react'

const Pizaa = ({pizaaObject}) => {
  return (
    <li className= {`pizza ${pizaaObject.soldOut ? "sold-out" : "" }`} >
    <img src={pizaaObject.photoName} alt= {pizaaObject.name}  />

    <div>
    <h3> {pizaaObject.name} </h3>
    <p> {pizaaObject.ingredients} </p>
    <span>  { pizaaObject.soldOut ? "SOLD OUT" : pizaaObject.price} </span>
    
    </div>
      
    </li>
  )
}

export default Pizaa

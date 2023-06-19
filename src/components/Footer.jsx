import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen =  (hour >= openHour && hour <= closeHour) ;
  

  return (
    <footer className='footer'>
    {isOpen && <p>open</p> }
    <div className='order' >
    <p>
    We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
    online.
    </p>
    <button className='btn' > Order</button>
    </div>
    </footer>
  )
}

export default Footer

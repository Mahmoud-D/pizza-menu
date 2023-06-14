import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const operHour = 12;
    const closeHour = 22;
    const isOpen =  (hour >= operHour && hour <= closeHour) ;

  return (
    <footer>
    </footer>
  )
}

export default Footer

import React from 'react'
import menuData from '../data'
import Pizaa from './Pizaa';
const Menu = () => {
 
    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false,
        },
      ];

  return (
    <main className='menu'>
    <h2>Our menu</h2>

    <ul className='pizzas'>
    {pizzaData.map((pizaa)=> (
        <Pizaa pizaaObject= {pizaa} />
        ))}
        </ul>
 
   {/*  <Pizaa name={pizaa.name} photoName={pizaa.photoName} />*/}
    </main>
  )
}

export default Menu

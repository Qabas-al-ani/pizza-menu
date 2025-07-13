// Importing core React libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Importing global styles
import "./index.css";

// Sample pizza data array
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
    soldOut: true, // This pizza is sold out
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Top-level component that renders the whole app layout
function App() {
  return (
    <div className="container">
      <Header /> {/* Renders the app header */}
      <Menu /> {/* Renders the menu section */}
      <Footer /> {/* Renders the footer section */}
    </div>
  );
}

// Header component with app title
function Header() {
  const style = {}; // Placeholder for future dynamic styles
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu component where the pizza items will be displayed
function Menu() {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {/* Right now it's hardcoded — you can map over pizzaData here later */}

      <ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

// Component to display a single pizza item (currently static)
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

// Footer component, currently showing current time and text
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're open
    </footer>
  );

  // --- Optional logic for opening hours below (not currently used) ---
  // const hour = new Date().toLocaleTimeString();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we're open");
  // } else {
  //   alert("we're closed");
  // }
}

// React 18 way to render the root App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);

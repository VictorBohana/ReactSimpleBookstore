import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import BookDetails from "./components/BookDetails";
import books from "./books";

const App = () => {
  
  const [cart, setCart] = useState([]);
  const addNewItem = (newBook) => {
    let bookInCart = false;
    cart.forEach((book) => {
      if (book.title === newBook.title) {
        console.log(`Book ${newBook.title} is already in the cart.`);
        bookInCart = true;
      }
    });

    if (!bookInCart) {
      const newCart = [...cart];
      newBook.amount = 1;
      newCart.push(newBook);
      setCart(newCart);
    }
  };

  const increaseItemAmount = (item) => {
    item.amount += 1;
    const newCart = [...cart];
    setCart(newCart);
  };

  const decreaseItemAmount = (item) => {
    item.amount -= 1;
    const newCart = [...cart];
    const index = cart.indexOf(item);
    if (item.amount === 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  return (
    <div className="container">
      <Router>
        <Navbar cartLength={cart.length}/>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home books={books} addNewItem={addNewItem} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseItemAmount={increaseItemAmount}
                decreaseItemAmount={decreaseItemAmount}
              />
            }
          />
          <Route path="/bookDetails" element={<BookDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

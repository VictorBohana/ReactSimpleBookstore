import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const addItemToCart = (book) => {
    props.addNewItem(book);
  }

  const bookList = props.books.map((book) => {
    return (
      <div className="book" key={book.name}>
        <img
          onClick={() => navigate("/bookDetails", { state: book })}
          className="book-image"
          src={book.imageUrl}
          alt=""
        />
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <p>${book.price}</p>
        <button className="add-to-cart-btn" onClick={() => addItemToCart(book)}>Add to cart</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Available Books</h1>
      <div className="books">{bookList}</div>
    </div>
  );
};

export default Home;

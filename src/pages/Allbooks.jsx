import React, { useState } from "react";
import "../style/Allbooks.css";
import { useNavigate } from "react-router-dom";

const Allbooks = () => {
  const navigation = useNavigate();

  const [books, setBooks] = useState([
    {
      id: 1,
      bookName: "xyz",
      authorName: "xyz",
      publishedDate: "1233",
    },
    {
      id: 2,
      bookName: "abc",
      authorName: "abc",
      publishedDate: "2020",
    },
    {
      id: 3,
      bookName: "JavaScript",
      authorName: "John",
      publishedDate: "2024",
    },
  ]);

  return (
    <div className="all-books">
      <h2>All Books</h2>

      <div className="books-container">
        {books.map((book) => {
          const { id, bookName, authorName, publishedDate } = book;

          return (
            <div className="book-card" key={id}>
              <h3>{bookName}</h3>

              <p>
                <strong>Author:</strong> {authorName}
              </p>

              <p>
                <strong>Published Date:</strong> {publishedDate}
              </p>

              <button onClick={() => navigation(`/single-books/${id}`)}>
                View Book
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allbooks;

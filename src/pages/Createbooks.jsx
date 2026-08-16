import React, { useState } from "react";
import "../style/Createbooks.css";

const Createbooks = () => {
  const [userData, setUserData] = useState({
    bookName: "",
    authorName: "",
    publishedDate: "",
  });

  function handleuserData(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setUserData({
      bookName: "",
      authorName: "",
      publishedDate: "",
    });
  }

  return (
    <div className="create-book-container">
      <form className="create-book-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Book</h2>

        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            placeholder="Enter book name"
            value={userData.bookName}
            onChange={handleuserData}
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            placeholder="Enter author name"
            value={userData.authorName}
            onChange={handleuserData}
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishedDate">Published Date</label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            value={userData.publishedDate}
            onChange={handleuserData}
          />
        </div>

        <div className="button-container">
          <button className="create-book-btn" type="submit">
            Create Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createbooks;

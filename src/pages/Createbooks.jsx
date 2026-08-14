import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
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

      <div>
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

      <div>
        <label htmlFor="publishedDate">Published Date</label>
        <input
          type="date"
          id="publishedDate"
          name="publishedDate"
          value={userData.publishedDate} 
          onChange={handleuserData}
        />
      </div>

      <div>
        <button type="submit">Create Book</button>
      </div>
    </form>
  );
};

export default Createbooks;

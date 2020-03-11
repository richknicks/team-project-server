import React from "react";

const BooksForm = props => {
  return (
    <div>
      <button onClick={props.getBooksBtn}>Get awesome{props.name}</button>
    </div>
  );
};

export default BooksForm;

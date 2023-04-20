
import React from "react";
import {books} from "../data/books";

import PreviewButton from "./buttons/previewButton";
import CartButton from "./buttons/cartButton";

const Booklist = () => {
  console.log(books)
  return (
    <div style={{display : 'flex',justifyContent:'center',gap:'40px'}}>
      {
        books.map((book) => {
          return (
            <div>
              <img src={book.img} alt=""/>
              <h3>{book.tittle}</h3>
              <p>{book.author}</p>
              <div style={{display:'flex',color:'cyan',gap:'5px'}}>
              <CartButton book={book.name}/>
              <PreviewButton/>
              </div>
            </div>
            
          )
        })
      }
    </div>
  )
}
export default Booklist
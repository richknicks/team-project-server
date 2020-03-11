import React from 'react'; 
import cuid from "cuid";
const BooksDisplay = (props) =>{
    
    return (
    
    <div> 
        {props.booksDisplay.map(book=>(
           
                <div key={cuid()}>
                    <h2>{book.title}</h2>
        <p>{book.year}</p>
                </div>
            
        ))}
        </div>
        
        )}; 
        
        export default BooksDisplay
import React from 'react';
import './bookcard.css'

const BookCard = (props) => {
    return (
        <div>
            <div className="cardWrapper">
                <h2 className="book-title">{props.title}</h2>
                <h3 className="author-title">{props.author}</h3>

                <img src={props.image} className="card-img" alt=""></img>
                <div className="card-body">
                    <p className="book-description">{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default BookCard;

// export default function bookcard() {
//     return (

//     )
// }

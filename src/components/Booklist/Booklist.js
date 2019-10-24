import React from 'react'
import Bookcard from '../BookCard/bookcard';

export default function Booklist(props) {
    return (
        <div className='list'>
            {
                props.books.map((book, i) => {
                    return <Bookcard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.author}
                        description={book.volumeInfo.description}
                    />
                }
                )}
        </div>
    )
}

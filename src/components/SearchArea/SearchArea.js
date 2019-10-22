import React from 'react'

export default function SearchArea(props) {
    return (
        <div className='search-area'>
            <form onSubmit={props.searchBook} action=''>
                <input onChange={props.handleSearch} type='text' placeholder='Search Book' />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}


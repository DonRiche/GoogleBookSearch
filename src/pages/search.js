import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Bookcard from '../components/BookCard/bookcard'

function search() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div className="jumboHeader">Saved Books
          </div>
                    <Bookcard />
                    <Bookcard />

                </div>
            </div>
        </div >
    );
}

export default search;

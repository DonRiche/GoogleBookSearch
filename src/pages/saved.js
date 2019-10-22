import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Bookcard from '../components/BookCard/bookcard'

function saved() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="jumboHeader">Saved Books
          </div>
                    <Bookcard />
                    <Bookcard />

                </div>
            </div>
        </div >
    );
}

export default saved;

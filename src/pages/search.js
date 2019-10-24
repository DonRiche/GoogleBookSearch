import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';

function search() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="jumboHeader">Saved Books</div>

                </div>
            </div>
        </div >
    );
}

export default search;

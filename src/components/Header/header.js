import React, { Component } from 'react';
import './header.css'
import SearchArea from '../SearchArea/SearchArea'
import request from 'superagent'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (evt) => {
        evt.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);

            })
    }

    handleSearch = (evt) => {
        this.setState({ searchField: evt.target.value })
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">(React) Google Books Search</h1>
                    <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                </div>
            </div>
        );
    }
}

export default Header;

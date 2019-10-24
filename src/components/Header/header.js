import React, { Component } from 'react';
import './header.css'
import SearchArea from '../SearchArea/SearchArea'
import request from 'superagent'
import Booklist from '../Booklist/Booklist'

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

                this.setState({
                    books: [...data.body.items]
                })
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
                    <Booklist books={this.state.books} />

                </div>
            </div>
        );
    }
}

export default Header;

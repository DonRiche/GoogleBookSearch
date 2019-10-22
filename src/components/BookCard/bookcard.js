import React from 'react';
import './bookcard.css'

export default function bookcard() {
    return (
        <div>
            <div className="cardWrapper">
                <h2 className="book-title">Mr.Mercedes</h2>
                <h3 className="author-title">Stephen King</h3>

                <img src="https://tse2.mm.bing.net/th?id=OIP.hosc-oFP2PRK4wFeLbo1ZAAAAA&pid=Api&P=0&w=300&h=300" className="card-img" alt="..."></img>
                <div className="card-body">
                    <p className="book-description">Quis deserunt exercitation laboris amet irure. Aliquip nostrud Lorem exercitation ex consequat Lorem consectetur voluptate. Velit tempor adipisicing elit est nulla et esse laboris pariatur excepteur. Sint nulla adipisicing velit do quis ullamco. Cupidatat id nulla consequat tempor veniam ad nisi non tempor. Eiusmod sint amet enim occaecat tempor dolor ut. Aute eu duis esse anim nostrud veniam magna id.</p>
                </div>
            </div>
        </div>
    )
}

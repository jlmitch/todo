import React, { Component } from 'react';
import LiTag from './li-tag.js';

class List extends Component {
    render() {
        return (
            <div className="list-wrapper">
                <ul>
                    <LiTag />
                </ul>
            </div>
        )
    }
}

export default List;
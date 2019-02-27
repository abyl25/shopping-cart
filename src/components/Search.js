import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        title: ''
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandler}/>
                <button>Search</button>
            </div>
        );
    }
}

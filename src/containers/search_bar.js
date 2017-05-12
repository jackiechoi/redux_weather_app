import React, { Component } from 'react';

export default class SearchBar extends Component {
    //set state up and initialize it
    constructor(props){
        super(props);

        this.state = { term: '' };

        //SearchBar(this) has a function, onInputChange. Bind that function with to this which is SearchBar and then replace onInPutChange with the new bound instance of SearchBar
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault(); //don't submit the form. Just go and fetch the weather data!

    }

    render (){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        );
    }
}
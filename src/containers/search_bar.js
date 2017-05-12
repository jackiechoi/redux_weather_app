import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    //set state up and initialize it
    constructor(props){
        super(props);

        this.state = { term: '' };

        //SearchBar(this) has functions, onInputChange, onFormSubmit. Bind those functions with this which is SearchBar and then replace the functions with the newly bound instances of SearchBar
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault(); //don't submit the form. Just go and fetch the weather data!


        //2. Calls actionCreator(fetchWeather) with the search term
        this.props.fetchWeather(this.state.term);
        //3. Then set the term to empty string again which makes the component re-render
        this.setState({ term: '' }); //clear the search input
    }

    render (){
        return (
		        //1.User submits with search term
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    //The input has the value of this.state.term which will be empty at this point
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
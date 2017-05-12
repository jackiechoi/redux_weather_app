import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


//the goal here is to call the actionCreator whenever the user submits the form.
class SearchBar extends Component {
  //set state up and initialize it
  constructor(props){
    super(props);

    this.state = { term: '' };

    //SearchBar(this) has functions, onInputChange, onFormSubmit. Bind those functions with "this" which is SearchBar and then replace the functions with the newly bound instances of SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    //wire up the onFormSubmit function (callback function) so that whenever the user submits, we fire the actionCreator, fetchWeather in actions/index.js and make the API request with Axios
    onFormSubmit(event){
        event.preventDefault(); //don't submit the form. Just go and fetch the weather data!

        //2. Calls actionCreator(fetchWeather) with the search term
        this.props.fetchWeather(this.state.term);
        //3. Then set the term to empty string again which makes the component re-render and clears the search input
        this.setState({ term: '' });
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

//bind the actionCreator, fetWeather, as a property to the search_bar container
function mapDispatchToProps(dispatch) {
    //this makes sure that whenever the actionCreator, fetchWeather, is called and return an action, is bound with dispatch. Resulting in the action to flow down into the middleware and the reducer
    return bindActionCreators({ fetchWeather }, dispatch);
}

//Passing null as the first arg, because state is not needed here.
export default connect(null, mapDispatchToProps)(SearchBar);

//by binding the actionCreator to dispatch and mapping it to props, this gives us access to function this.props.fetchWeather inside the component here (#2)
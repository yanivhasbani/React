import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };

        // this problem:
        // Solution -> "Override" the existing
        //             this.onInputChange with 
        //              the other on the right
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        //See inside render for more info
        event.preventDefault();

        //We need to go and fetch the weather
        this.props.fetchWeather(this.state.term);
        //This will cause re-render because of state change
        this.setState({ term:'' });
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    render() {
        return (
            // FORM SUBMIT ->
            // Every call of form child will make
            // the browser to refresh with an empty value
            // AND A ? IN URL and request the page again from localhost:8080?

            // Solution - onSubmit to prevent!
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-dat forecast in you favorite cities"
                    className="form-control"
                    value = {this.state.term}
                    onChange = {this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" 
                            className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}


// This is null because we have no state for this component
export default connect(null, mapDispatchToProps)(SearchBar);
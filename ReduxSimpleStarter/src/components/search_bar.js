import React, {Component} from 'react';

// Not a singelton!
class SearchBar extends Component {
    // Called for every instance of SearchBar
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    // Run on every state change for this component 
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={
                    event => this.onInputChange(event.target.value)
                }
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        //Callback to App
        this.props.onSearchTermChange(term);
    }

    // Pre ES6 
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
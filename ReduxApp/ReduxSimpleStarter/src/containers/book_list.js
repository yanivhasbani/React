import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = {book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item"
                    >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// return a props, which will be available in constructor as props
// THE GLUE BETWEEN REACT AND REDUX
function mapStateToProps(state) {
    // Whatever return will show up as props
    // inside of BookList
    return {
        // Returned from the reducer
        books: state.books
    }
}

// Anything returned from this function will end
// up as props on the BookList container
function mapDispacthToProps(dispatch) {
    // Whenever selectBook is called, the result
    // should be past to all our reducers
    return bindActionCreators({ selectBook:selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs
// to know about this new dispatch method, selectBook. 
// Make it available as props.

//connect - "Hooking" mapStateToProps to BookList lifecycle
            // return: A Container, with the hook
export default connect(mapStateToProps, mapDispacthToProps)(BookList);
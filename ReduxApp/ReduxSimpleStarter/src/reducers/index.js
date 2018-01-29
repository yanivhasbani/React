import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books"
import ActiveBook from './reducer_active_book'

// The function that create the state!

// Each reducer create it's own part of the state
// And receive his part of state each time
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

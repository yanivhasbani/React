export function selectBook(book) {
    console.log('A book has bee selected: ', book.title);
    const action = {
        type: 'BOOK_SELECTED',
        payload: book
    };

    return action;
}
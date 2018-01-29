import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
    case FETCH_WEATHER:
        // ... flatten the state array and add him
        return [action.payload.data, ... state];
    }
    return state;
}
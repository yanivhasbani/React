import { 
    FETCH_USERS
} from './types';

import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/users";

export function fetchUsers() {
    const request = axios.get(URL);

    return {
        type: FETCH_USERS,
        payload: request
    };
}
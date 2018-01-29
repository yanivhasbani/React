import axios from 'axios';

const API_KEY='18a7de216cceb2867d4c828170030e13';
const ROOT_URL  =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        //Because this is a promise as a payload,
        //Redux stop the action, unwrap the promise,
        //And then replace the response as the payload
        payload: request
    };
}
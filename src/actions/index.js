import axios from 'axios';
import {FETCH_PEOPLE, FETCH_PLANEETS, UPDATE_PEOPLE } from './types';

const ROOT_URL = 'http://localhost:3008/';

export function fetchPeople(content = '', page = 1) {
    const append = content ? `q=${content}&` : "";

    const url = `${ROOT_URL}people?${append}_page=${page}`;
    const request = axios.get(url);
    return {
        type: FETCH_PEOPLE,
        payload: request
    }
}

export function fetchPlanets() {
    const url = `${ROOT_URL}planets`;
    const request = axios.get(url);
    return {
        type: FETCH_PLANEETS,
        payload: request
    }
}


export function updatePeople(id=1) {
    const url = `${ROOT_URL}people${id}`;
    const request = axios.put(url);
    return {
        type: UPDATE_PEOPLE,
        payload: request
    }
}

export function addFavorite(info, cnt = 0) {
    console.log('Call add favorite action creator, info: ', info);
    const url = `${ROOT_URL}favoritepeople`;
    info.cnt = cnt;
    const request = axios.post(url,info);
    return {
        type:'ADD_FAVORITE',
        payload:request
    }
}
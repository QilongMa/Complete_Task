import axios from 'axios';
import {FETCH_PEOPLE, FETCH_PLANEETS } from './types';


const ROOT_URL = 'http://localhost:3008/';

export function fetchPeople(page = 1) {
    const append = '?_page=' + page;
    const url = `${ROOT_URL}people${append}`;
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

/**
 * Fix
 *  When filter sets larger then 10
 *  need to do pagination
 **/
export function fetchMatchPeople(content) {
    if(!content) return fetchPeople();
    const url = `${ROOT_URL}people?q=${content}`;
    const request = axios.get(url);
    return {
        type: FETCH_PEOPLE,
        payload: request
    }
}
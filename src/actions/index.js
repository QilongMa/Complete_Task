import axios from 'axios';
import {FETCH_PEOPLE, FETCH_PLANEETS } from './types';


const ROOT_URL = 'http://localhost:3008/';

export function fetchPeople() {
    const url = `${ROOT_URL}people`;
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
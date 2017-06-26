import { FETCH_PLANEETS } from '../actions/types'

export default function (state = [], action) {
    switch (action.type){
        case FETCH_PLANEETS: return [action.payload.data, ...state];
    }
    return state;
}
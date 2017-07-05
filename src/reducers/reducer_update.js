import { UPDATE_PEOPLE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type){
        case UPDATE_PEOPLE:
            return [action.payload.data, ...state];
        default: return state;
    }
}
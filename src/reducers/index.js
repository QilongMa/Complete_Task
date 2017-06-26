import { combineReducers } from 'redux';
import CardReducer from './reducer_card';
import PlanetReducer from './reducer_planet';

const rootReducer = combineReducers({
    people: CardReducer,
    planets: PlanetReducer
});

export default rootReducer;
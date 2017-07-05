import { combineReducers } from 'redux';
import CardReducer from './reducer_card';
import PlanetReducer from './reducer_planet';
import UpdatePeopleReducer from './reducer_update';
import AddFavorite from './reducer_favorite';

const rootReducer = combineReducers({
    people: CardReducer,
    planets: PlanetReducer,
    update_people: UpdatePeopleReducer,
    // favorite:AddFavorite
});

export default rootReducer;
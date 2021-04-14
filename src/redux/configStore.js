import { createStore , combineReducers,applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';

  //create store and all tht methods
  //CombineReducer to combine all the reducers 
export const ConfigStore = () =>{
    
    const store = createStore(
        combineReducers({
          dishes : Dishes,
          comments : Comments,
          promotions : Promotions,
          leaders : Leaders
        }),
    );
    return store;

}
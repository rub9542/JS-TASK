import todo from './reducer';
import {createStore} from 'redux';
export const store = createStore(todo)

export default store
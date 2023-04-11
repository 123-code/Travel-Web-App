import { legacy_createStore as createStore} from 'redux'

const initialState = {
    selectedTour: '',
  };

  function Reducer(initialState, action){
    switch(action.type){
        case 'SELECT_TOUR':
            return{
                ...state,selectedTour:action.payload
            }
        default:
            return initialState;      
    }
  }
  
const store = createStore(Reducer,initialState);
export default store;
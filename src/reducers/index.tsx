import { BoilerplateAction } from '../actions';
import { StoreState } from '../types/index';
import { 
  FOO_FOO
} from '../constants/index';

export function processAction(state: StoreState, action: BoilerplateAction): StoreState {
  switch (action.type) {
    case FOO_FOO:
      return {...state, foo: action.foo};
  }
  
  return state;
}
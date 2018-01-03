import { TOGGLE_MAJOR } from '../actions/search-actions'
export default function majorReducer(state = true, action) {
  if (action.type === TOGGLE_MAJOR) {
    return action.payload;
  } else {
    return state;
  }
}

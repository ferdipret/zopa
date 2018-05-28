import { FETCH_PROFILE } from '../actions/constants'

const profile = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload

    default:
      return state
  }
}

export default profile

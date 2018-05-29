import { FETCH_PROFILE, UPDATE_USER_AMOUNT } from "../actions/constants"

const profile = (state = {}, action) => {
  let newState
  switch (action.type) {
    case FETCH_PROFILE: {
      newState = action.payload
      break
    }

    case UPDATE_USER_AMOUNT: {
      newState = {
        ...state,
        amount: state.amount - action.payload
      }
      break
    }

    default: {
      newState = state
      break
    }
  }

  return newState
}

export default profile

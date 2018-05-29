import {
  FETCH_TRANSACTIONS,
  UPDATE_INPUT_VALUE,
  UPDATE_TRANSACTIONS
} from "../actions/constants"

export const initialState = {
  name: "",
  email: "",
  amount: "",
  transactionHistory: []
}

const transactions = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case FETCH_TRANSACTIONS: {
      newState = {
        ...state,
        transactionHistory: action.payload
      }
      break
    }

    case UPDATE_TRANSACTIONS: {
      newState = {
        ...state,
        transactionHistory: state.transactionHistory.concat(action.payload)
      }
      break
    }

    case UPDATE_INPUT_VALUE: {
      newState = {
        ...state,
        [action.payload.ref]: action.payload.value
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

export default transactions

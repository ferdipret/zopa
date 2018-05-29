import { combineReducers } from "redux"
import transaction from "./transaction"
import profile from "./profile"

export default combineReducers({
  transaction,
  profile
})

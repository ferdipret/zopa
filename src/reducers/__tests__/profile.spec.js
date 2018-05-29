import profileReducer from "../profile"
import * as constants from "../../actions/constants"

const initialState = { id: 1, firstname: "Ferdinand", amount: 5000 }

describe("profileReducer", () => {
  const payload = { id: 1, firstname: "Ferdinand" }

  it("should initialize state with an empty object", () => {
    expect(profileReducer(undefined, {})).toEqual({})
  })

  it("fetches and sets the user profile", () => {
    expect(
      profileReducer({}, { type: constants.FETCH_PROFILE, payload })
    ).toEqual(payload)
  })

  it("updates the user amount", () => {
    expect(
      profileReducer(initialState, {
        type: constants.UPDATE_USER_AMOUNT,
        payload: 2000
      })
    ).toEqual({
      id: 1,
      firstname: "Ferdinand",
      amount: 3000
    })
  })
})

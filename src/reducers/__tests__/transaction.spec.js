import transactionReducer, { initialState } from "../transaction"
import * as constants from "../../actions/constants"

describe("transactionReducer", () => {
  it("should initialize state", () => {
    expect(transactionReducer(undefined, {})).toEqual(initialState)
  })

  it("fetches and sets the transaction history", () => {
    const payload = [{ id: 1, name: "Kim" }, { id: 2, name: "Lee" }]

    expect(
      transactionReducer(initialState, {
        type: constants.FETCH_TRANSACTIONS,
        payload
      })
    ).toEqual({
      ...initialState,
      transactionHistory: payload
    })
  })

  it("updates the transaction history when making new transactions", () => {
    const payload = { id: 1, name: "Kim", amount: 2000 }

    expect(
      transactionReducer(initialState, {
        type: constants.UPDATE_TRANSACTIONS,
        payload
      })
    ).toEqual({
      ...initialState,
      transactionHistory: [payload]
    })
  })

  it("updates name input values", () => {
    const payload = {
      value: "Jimmy",
      ref: "name"
    }

    expect(
      transactionReducer(initialState, {
        type: constants.UPDATE_INPUT_VALUE,
        payload
      })
    ).toEqual({
      ...initialState,
      name: payload.value
    })
  })

  it("updates email input values", () => {
    const payload = {
      value: "jimmy@zopa.com",
      ref: "email"
    }

    expect(
      transactionReducer(initialState, {
        type: constants.UPDATE_INPUT_VALUE,
        payload
      })
    ).toEqual({
      ...initialState,
      email: payload.value
    })
  })

  it("updates amount input values", () => {
    const payload = {
      value: "1000",
      ref: "amount"
    }

    expect(
      transactionReducer(initialState, {
        type: constants.UPDATE_INPUT_VALUE,
        payload
      })
    ).toEqual({
      ...initialState,
      amount: payload.value
    })
  })
})

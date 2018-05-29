import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"

import * as constants from "../constants"
import * as actions from "../transaction"
import { initialState } from "../../reducers/transaction"

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ transactions: initialState })
const mockGetResponse = {
  body: [{ id: 1, name: "Kim" }, { id: 2, name: "Lee" }]
}
const mockPostResponse = {
  body: [{ id: 1, amount: 1000 }]
}

fetchMock.get("localhost:1337/transactions?id=1&id=2", mockGetResponse)
fetchMock.post("localhost:1337/transactions", mockPostResponse)
fetchMock.post("localhost:1337/profiles", {
  amount: 200
})

it("creates an async action to fetch user transactions", () => {
  const expectedActions = [
    {
      type: constants.FETCH_TRANSACTIONS,
      payload: mockGetResponse.body
    }
  ]

  return store
    .dispatch(
      actions.fetchTransactions(mockGetResponse.body.map(user => user.id))
    )
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      store.clearActions()
    })
})

it("creates an async action to post a new transaction, and then update the user amount", () => {
  const expectedActions = [
    {
      type: constants.UPDATE_TRANSACTIONS,
      payload: mockPostResponse.body
    },
    {
      type: constants.UPDATE_USER_AMOUNT,
      payload: { amount: 200 }
    }
  ]

  return store
    .dispatch(actions.postTransaction(mockPostResponse.body))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      store.clearActions()
    })
})

it("creates an action to update transaction input field values", () => {
  const namePayload = {
    value: "Jimmy",
    ref: "name"
  }

  const emailPayload = {
    value: "jimmy@zopa.com",
    ref: "email"
  }

  const amountPayload = {
    value: 1000,
    ref: "amount"
  }

  const expectedNameAction = {
    type: constants.UPDATE_INPUT_VALUE,
    payload: namePayload
  }

  const expectedEmailAction = {
    type: constants.UPDATE_INPUT_VALUE,
    payload: emailPayload
  }

  const expectedAmountAction = {
    type: constants.UPDATE_INPUT_VALUE,
    payload: amountPayload
  }

  expect(actions.updateInputValue(namePayload)).toEqual(expectedNameAction)
  expect(actions.updateInputValue(emailPayload)).toEqual(expectedEmailAction)
  expect(actions.updateInputValue(amountPayload)).toEqual(expectedAmountAction)
})

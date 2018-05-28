import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as constants from '../constants'
import * as actions from '../transaction'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ transactions: [] })
const mockResponse = { body: [{ id: 1, name: 'Kim' }, { id: 2, name: 'Lee' }] }

fetchMock.get('localhost:1337/transactions?id=1&id=2', mockResponse)

it('creates an async action to fetch user transactions', () => {
  const expectedActions = [
    { payload: mockResponse.body, type: constants.FETCH_TRANSACTIONS },
  ]

  return store
    .dispatch(actions.fetchTransactions(mockResponse.body.map(user => user.id)))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
})

it('creates an action to handle transaction posts to the db', () => {
  const payload = {
    name: '',
    email: '',
    amount: '',
  }
  const expectedAction = { type: constants.POST_TRANSACTION, payload }

  expect(actions.postTransaction(payload)).toEqual(expectedAction)
})

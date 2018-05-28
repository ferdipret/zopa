import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as constants from '../constants'
import * as actions from '../profile'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ profile: {} })
const mockResponse = { body: { id: 1, firstname: 'Ferdinand' } }

fetchMock.get(/localhost:1337\/\d+/, mockResponse)

it('creates an async action to fetch the user profile', () => {
  const expectedActions = [
    { payload: mockResponse.body, type: constants.FETCH_PROFILE },
  ]

  return store
    .dispatch(actions.fetchProfile(mockResponse.body.id))
    .then(res => {
      expect(store.getActions()).toEqual(expectedActions)
    })
})

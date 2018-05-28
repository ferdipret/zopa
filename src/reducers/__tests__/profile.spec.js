import profileReducer from '../profile'
import * as constants from '../../actions/constants'

describe('profileReducer', () => {
  const payload = { id: 1, firstname: 'Ferdinand' }

  it('should initialize state with an empty object', () => {
    expect(profileReducer(undefined, {})).toEqual({})
  })

  it('fetches and sets the user profile', () => {
    expect(
      profileReducer({}, { type: constants.FETCH_PROFILE, payload }),
    ).toEqual(payload)
  })
})

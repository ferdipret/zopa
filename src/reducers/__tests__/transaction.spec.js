import transactionReducer from '../transaction'
import * as constants from '../../actions/constants'

describe('transactionReducer', () => {
  const payload = [{ id: 1, name: 'Kim' }, { id: 2, name: 'Lee' }]

  it('should initialize state with an empty array', () => {
    expect(transactionReducer(undefined, {})).toEqual([])
  })
})

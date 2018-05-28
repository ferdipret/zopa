import * as constants from './constants'

export const postTransaction = payload => {
  return {
    type: constants.POST_TRANSACTION,
    payload,
  }
}

export const fetchTransactions = ids => dispatch => {
  const url = `${constants.API_ENTRY_POINT}/transactions?id=${ids.join('&id=')}`
  return fetch(url)
    .then(res => res.json())
    .then(json =>
      dispatch({ type: constants.FETCH_TRANSACTIONS, payload: json }),
    )
}

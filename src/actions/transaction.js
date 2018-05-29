import * as constants from "./constants"

export const updateInputValue = payload => {
  let { ref } = payload
  let value = payload.ref === "amount" ? parseInt(payload.value) : payload.value

  return {
    type: constants.UPDATE_INPUT_VALUE,
    payload: {
      value,
      ref
    }
  }
}

export const fetchTransactions = ids => dispatch => {
  const url = `${constants.API_ENTRY_POINT}/transactions?id=${ids.join("&id=")}`
  return fetch(url)
    .then(res => res.json())
    .then(json =>
      dispatch({ type: constants.FETCH_TRANSACTIONS, payload: json })
    )
}

export const postTransaction = payload => dispatch => {
  return fetch(`${constants.API_ENTRY_POINT}/transactions`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: constants.UPDATE_TRANSACTIONS, payload: json })
      return fetch(`${constants.API_ENTRY_POINT}/profiles`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(json)
      })
    })
    .then(res => res.json())
    .then(json =>
      dispatch({ type: constants.UPDATE_USER_AMOUNT, payload: json })
    )
}

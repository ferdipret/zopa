import * as constants from "./constants"

export const updateInputValue = payload => {
  let { ref } = payload
  let value

  if (payload.ref === "amount") {
    value =
      isNaN(payload.value) || !payload.value ? "" : parseInt(payload.value, 10)
  } else {
    value = payload.value
  }

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

export const postTransaction = (profile, payload) => dispatch => {
  return fetch(`${constants.API_ENTRY_POINT}/transactions`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: constants.UPDATE_TRANSACTIONS, payload: json })
      return fetch(`${constants.API_ENTRY_POINT}/profiles/${profile.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:1337"
        },
        method: "PATCH",
        body: JSON.stringify({
          balance: profile.balance - json.amount,
          transactionIds: [...profile.transactionIds, json.id]
        })
      })
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: constants.UPDATE_USER_AMOUNT, payload: json })
    })
}

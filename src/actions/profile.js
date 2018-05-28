import * as constants from './constants'

export const fetchProfile = id => dispatch => {
  const url = `${constants.API_ENTRY_POINT}/${id}`
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch({ type: constants.FETCH_PROFILE, payload: json }))
}

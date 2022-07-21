import { removeDuplicates } from "./removeDuplicates"

export function getData(dispatch, urlAddOn, errorText) {
    // accepts dispatch function from local reducer, specific portion of url, and error text for 404 status
    dispatch({ type: 'loading' })
        fetch(`https://api.tvmaze.com/${urlAddOn}`)
            .then(res => {
                if(res.status === 404) {
                    return dispatch({
                        type: 'error',
                        error: errorText
                    })
                } else if(res.status === 200 || res.status === 304) {
                    return res.json()
                }
            })
            .then(data => {
                // call removeDuplicates funciton if fetch is for crew data
                urlAddOn.includes('crew') ?
                dispatch({
                    type: 'success',
                    data: removeDuplicates(data)
                })
                : dispatch({
                    type: 'success',
                    data: data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'error',
                    error: `Oops, something went wrong! Please try again later. Error: ${err}`
                })
            })
}
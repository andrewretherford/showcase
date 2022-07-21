export function apiResultReducer(state, action) {
    switch(action.type) {
        case 'loading': 
            return {...state, loading: true}

        case 'success':
            return {...state, loading: false, result: action.data}
        
        case 'error':
            return {...state, loading: false, error: action.error}
        
        case 'removeDupes':
            console.log(state)
            if(!state.result) return {...state, loading: false, result: action.data}
            else return state
        default:
            return state
    }
}
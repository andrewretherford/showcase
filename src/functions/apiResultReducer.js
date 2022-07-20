export function apiResultReducer(state, action) {
    switch(action.type) {
        case 'loading': 
            return {...state, loading: true}

        case 'success':
            return {...state, loading: false, result: action.data}
        
        case 'error':
            return {...state, loading: false, error: action.error}

        default:
            return state
    }
}
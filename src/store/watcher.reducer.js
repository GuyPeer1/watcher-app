const INITIAL_STATE = {
    watchers: [],
    selectedWatcher: null
}


export function watcherReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_WATCHERS':
            return {
                ...state,
                watchers: action.watchers
            }
        default:
            return state
    }
}
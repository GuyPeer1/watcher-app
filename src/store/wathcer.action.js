import { watcherService } from "../services/watcher.service"

export function loadWatchers() {

    return async (dispatch, getState) => {
        try {
            const watchers = await watcherService.query()
            dispatch({ type: 'SET_WATCHERS', watchers })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeWatcher(watcherId) {

    return async (dispatch) => {
        try {
            const watchers = await watcherService.remove(watcherId)
            dispatch({ type: 'REMOVE_WATCHER', watcherId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function addWatcher(watcher) {
    return async dispatch => {
        try {
            watcherService.save(watcher)
            dispatch({ type: 'ADD_WATCHER', watcher })
        } catch (err) {
            console.log('err:', err)
        }
    }
}
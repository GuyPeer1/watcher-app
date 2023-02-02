import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const watcherService = {
    query,
    save,
    remove,
    getById,
    getEmptyWatcher,
}

const STORAGE_KEY = 'watchers'

const gDefaultWatchers = [{
    id: 'w101',
    fullName: 'Puki Ba',
    movies: ['Rambo', 'Rocky']
}
]

var gWatchers = _loadWatchers()

function query() {
    let watchersToReturn = gWatchers
    return Promise.resolve([...watchersToReturn])
}

function getById(id) {
    const watcher = gWatchers.find(watcher => watcher._id === id)
    return Promise.resolve({ ...watcher })
}

function remove(id) {
    const idx = gWatchers.findIndex(watcher => watcher._id === id)
    gWatchers.splice(idx, 1)
    if (!gWatchers.length) gWatchers = gDefaultWatchers.slice()
    storageService.store(STORAGE_KEY, gWatchers)
    return Promise.resolve()
}

function save(watcherToSave) {
    if (watcherToSave._id) {
        const idx = gWatchers.findIndex(watcher => watcher._id === watcherToSave._id)
        gWatchers.splice(idx, 1, watcherToSave)
    } else {
        watcherToSave._id = utilService.makeId()
        gWatchers.push(watcherToSave)
    }
    storageService.store(STORAGE_KEY, gWatchers)
    return Promise.resolve(watcherToSave)

}

function getEmptyWatcher() {
    return {
        fullName: '',
        movies: ['']
    }
}


function _loadWatchers() {
    let watchers = storageService.load(STORAGE_KEY)
    if (!watchers || !watchers.length) watchers = gDefaultWatchers
    storageService.store(STORAGE_KEY, watchers)
    return watchers
}


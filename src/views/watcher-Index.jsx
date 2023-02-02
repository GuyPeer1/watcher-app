import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ErrorBoundary } from '../cmps/ErrorBoundary.jsx'
import { WatcherList } from '../cmps/watcher-list.jsx'
import { loadWatchers, removeWatcher, addWatcher,} from '../store/wathcer.action'


class _WatcherIndex extends Component {

    componentDidMount() {
        this.props.loadWatchers()
    }


    onRemoveWatcher = async (watcherId) => {
        try {
            this.props.removeWatcher(watcherId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {

        const { watchers } = this.props
        if (!watchers) return <div>Loading...</div>

        return (
            <section className='watchers-index'>
                <Link to='/watcher/edit'>Add Watcher</Link>
                <ErrorBoundary>
                    <WatcherList history={this.props.history} onRemoveWatcher={this.onRemoveWatcher} watchers={watchers} />
                </ErrorBoundary>
            </section>
        )
    }
}



const mapStoreStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,
})

const mapDispatchToProps = {
    loadWatchers,
    addWatcher,
    removeWatcher,
}

export const WatcherIndex = connect(mapStoreStateToProps, mapDispatchToProps)(_WatcherIndex)

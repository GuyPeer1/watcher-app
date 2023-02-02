import { Link } from "react-router-dom"

export function WatcherPreview({ watcher, onRemoveWatcher }) {

    return (
        <section className="watcher-preview">
            <Link to={`/watcher/${watcher.id}`} className="info">
                <h2>{watcher.fullName}</h2>
                <h4>{watcher.movies}</h4>
            </Link>
            <section className="actions">
                <button onClick={() => onRemoveWatcher(watcher.id)}>X</button>
                <Link to={`/watcher/edit/${watcher.id}`}>Edit</Link>
            </section>
        </section>
    )
}

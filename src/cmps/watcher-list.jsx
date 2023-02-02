import { WatcherPreview } from "./watcher-preview.jsx"

export function WatcherList({ watchers, onRemoveWatchers }) {
    return (
        <section className="watcher-list simple-cards-grid">
            {watchers.map(watcher =>
                <WatcherPreview
                    key={watcher._id}
                    watcher={watcher}
                    onRemoveWatchers={onRemoveWatchers}
                   
                />
            )}
        </section>
    )
}

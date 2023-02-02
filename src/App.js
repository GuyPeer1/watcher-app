import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss';
import { WatcherIndex } from './views/watcher-Index.jsx';
import { AppHeader } from './cmps/app-header.jsx';
import { About } from './views/about.jsx';
// import { WatcherDetails } from './views/watcher-details.jsx';
// import { WatcherEdit } from './views/wathcer-edit.jsx';

function App() {
    return (
        <Router>
            <div className="main-app">
                <AppHeader />
                <main className='container'>
                    <Switch>
                        {/* <Route path="/watcher/edit/:id?" component={WatcherEdit} /> */}
                        {/* <Route path="/watcher/:id" component={WatcherDetails} /> */}
                        <Route path="/about" component={About} />
                        <Route path="/" component={WatcherIndex} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>
                        Watcher App 2022 &copy;
                    </section>
                </footer>

            </div>
        </Router>
    );
}

export default App;

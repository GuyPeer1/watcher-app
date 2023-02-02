import { NavLink, withRouter } from 'react-router-dom'



function _AppHeader(props) {

    function onBack() {
        console.log('props:', props)
        props.history.goBack()
    }

    return (
        <header className="app-header">
            <section className="container">
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </section>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)


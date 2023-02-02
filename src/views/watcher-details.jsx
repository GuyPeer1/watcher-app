import { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { robotService } from '../services/robot.service'
import { spendBalance } from '../store/actions/user.actions'

class _RobotDetails extends Component {

    state = {
        robot: null
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        this.loadRobot()
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadRobot()
        }
    }

    loadRobot = async () => {
        const robot = await robotService.getById(this.props.match.params.id)
        this.setState({ robot })
    }

    onBack = () => {
        this.props.history.push('/')
    }

    onSpendBalance = () => {
        this.props.spendBalance(5)
    }

    render() {
        console.log('render');
        const { robot } = this.state
        const { loggedInUser } = this.props
        if (!robot) return <div>Loading...</div>
        return (
            <div className='robot-details'>
                <section>
                    <h3>Model: {robot.model}</h3>
                </section>
                <section>
                    <h3>Type: {robot.type}</h3>
                </section>
                <section>
                    <h3>Battery Status: {robot.batteryStatus}</h3>
                </section>
                <img src={`https://robohash.org/${robot._id}`} alt="" />
                <button onClick={this.onBack}>Back</button>
                <Link to='/robot/r3' >Next Robot</Link>
                <section>
                    {JSON.stringify(loggedInUser)}
                </section>
                <button onClick={this.onSpendBalance}>Spend Balance</button>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        loggedInUser: storeState.userModule.loggedInUser,
    }
}

const mapDispatchToProps = {
    spendBalance
}

export const RobotDetails = connect(mapStateToProps, mapDispatchToProps)(_RobotDetails)
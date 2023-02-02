import { Component } from 'react'
import { robotService } from '../services/robot.service.js'

export class RobotEdit extends Component {

    state = {
        robot: robotService.getEmptyRobot()
    }

    async componentDidMount() {
        const robotId = this.props.match.params.id
        if (robotId) {
            const robot = await robotService.getById(robotId)
            this.setState({ robot })
        }
    }

    onAddRobot = async (ev) => {
        ev.preventDefault()
        try {
            await robotService.save({ ...this.state.robot })
            this.props.history.push('/')
        } catch (err) {
            console.log('err:', err)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }

        this.setState(prevState => ({ robot: { ...prevState.robot, [field]: value } }))

    }

    render() {
        const { robot } = this.state
        if (!robot) return

        const { model, type } = robot
        return (
            <section className='robot-edit'>
                <h1>{robot._id ? 'Edit' : 'Add'} Robot</h1>
                <form onSubmit={this.onAddRobot}>
                    <label htmlFor="model">Model</label>
                    <input onChange={this.handleChange} value={model} type="text" name="model" id="model" />

                    <label htmlFor="type">Type</label>
                    <select onChange={this.handleChange} value={type} name="type" id="type">
                        <option disabled value="">Choose a type</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Pleasure">Pleasure</option>
                        <option value="Office">Office</option>
                    </select>


                    <button>Add</button>
                </form>
            </section>
        )
    }
}

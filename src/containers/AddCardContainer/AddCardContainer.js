import React,{Component} from 'react'
import classes from './AddCardContainer.scss'

class CardContainer extends Component {
    state = {
        header: '',
        status: '',
        content: '',
    }

    inputChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return (
            <div className={classes.addCardContainer}>
                <label >Header</label>
                <input type="text" id="header" placeholder="Header.." onChange={(e) => {
                    this.inputChange(e)
                }}/>
                <label >Status</label>
                <input type="text" id="status" placeholder="Status.." onChange={(e) => {
                    this.inputChange(e)
                }}/>
                <label >Content</label>
                <input type="text" id="content" placeholder="Content.." onChange={(e) => {
                    this.inputChange(e)
                }}/>
                <button onClick={() => {
                    this.props.history.push({
                            pathname:'/',
                            state: {newCard: this.state}
                        });
                    }
                }>submit</button>
            </div>
        )
    }
}

export default CardContainer
import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
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
                    this.props.onAddCard({...this.state})
                    this.props.history.push({
                            pathname:'/',
                        });
                    }
                }>submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCard: (card) => dispatch(actions.addCard(card)),
    };
};

export default connect(null, mapDispatchToProps)(CardContainer)
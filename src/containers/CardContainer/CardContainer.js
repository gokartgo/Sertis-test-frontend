import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import classes from './CardContainer.scss'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'

class CardContainer extends Component {
    
    state = {
        showModal: false,
        card: {
            header: '',
            status: '',
            content: '',
        },
    }

    deleteCard = (id) => {
        this.props.onDeleteCard(id)
    }

    editCard = (card) => {
        this.setState({showModal: true,
            card: {...card} 
        })
    }

    inputChange = (event) => {
        this.setState({card: {
                ...this.state.card,
                [event.target.id]:event.target.value,
            }
        })
    }

    cancelEditCard = () => {
        this.setState({showModal: false})
    }

    render() {
        const {
            cards
        } = this.props
        const card = cards.map(card => {
            return (<Card
                key={card.id}
                header={card.header}
                status={card.status}
                content={card.content}
                delete={() => {
                    this.deleteCard(card.id)
                }}
                edit={() => {
                    this.editCard(card)
                }}
            />)
        }) 
        console.log(this.state)
        return (
            <Aux>
                <div className={classes.CardContainer}>
                    {card}
                </div>
                <Modal show={this.state.showModal} modalClosed={this.cancelEditCard}>
                    <div className={classes.modalContainer}>
                        <label >Header</label>
                        <input 
                            type="text" id="header" 
                            placeholder="Header.." 
                            value={this.state.card.header} 
                            onChange={(e) => {
                            this.inputChange(e)
                        }}/>
                        <label >Status</label>
                        <input 
                            type="text" 
                            id="status" 
                            placeholder="Status.." 
                            value={this.state.card.status} 
                            onChange={(e) => {
                            this.inputChange(e)
                        }}/>
                        <label >Content</label>
                        <input 
                            type="text" 
                            id="content" 
                            placeholder="Content.." 
                            value={this.state.card.content} 
                            onChange={(e) => {
                            this.inputChange(e)
                        }}/>
                        <button onClick={() => {
                            this.props.onEditCard(this.state.card)
                            this.cancelEditCard()
                        }}>submit</button>
                    </div>
                </Modal>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditCard: (card) => dispatch(actions.editCard(card)),
        onDeleteCard: (id) => dispatch(actions.deleteCard(id)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CardContainer)
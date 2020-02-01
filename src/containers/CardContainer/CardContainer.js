import React,{Component} from 'react'
import classes from './CardContainer.scss'
import Card from '../../components/Card/Card'

class CardContainer extends Component {
    state = {
        cards: [
            {
                id:0,
                header: 'header0',
                status: 'status0',
                content: 'content0',
            },
            {
                id:1,
                header: 'header1',
                status: 'status1',
                content: 'content1',
            },
            {
                id:2,
                header: 'header2',
                status: 'status2',
                content: 'content2',
            }
        ]
    }

    componentWillMount() {
        console.log("test")
    }

    deleteCard = (id) => {
        const {
            cards
        } = this.state
        const newCards = cards.filter(card => {
            return card.id !== id
        })
        this.setState({cards:newCards})
    }

    render() {
        const {
            cards
        } = this.state
        const card = cards.map(card => {
            return (<Card
                key={card.id}
                header={card.header}
                status={card.status}
                content={card.content}
                delete={() => {
                    this.deleteCard(card.id)
                }}
            />)
        }) 

        return (
            <div className={classes.CardContainer}>
                {card}
            </div>
        )
    }
}

export default CardContainer
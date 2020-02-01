import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    cards: []
};

const addCard = (state, action) => {
    action.card.id = parseInt(Math.random() * 1000000)
    const newState = state.cards
    newState.push({...action.card})
    return updateObject(state,{cards:newState})
}

const editCard = (state, action) => {
    console.log('asdf',action)
    let newState = state.cards
    newState = newState.map(card => {
        if(card.id === action.card.id) {
            card = action.card
        }
        return card
    })
    return updateObject(state,{cards:newState})
}

const deleteCard = (state, action) => {
    let newState = state.cards
    newState = newState.filter(card => {
        return card.id !== action.id
    })
    return updateObject(state,{cards:newState})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CARD: return addCard(state, action)
        case actionTypes.EDIT_CARD: return editCard(state, action)
        case actionTypes.DELETE_CARD: return deleteCard(state, action)
        default:
            return state;
    }
}

export default reducer
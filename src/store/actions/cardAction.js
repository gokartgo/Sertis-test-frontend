import * as actionTypes from './actionTypes'

export const addCard = (card) => {
    return {
        type: actionTypes.ADD_CARD,
        card
    }
}


export const editCard = (card) => {
    return {
        type: actionTypes.EDIT_CARD,
        card,
    }
}

export const deleteCard = (id) => {
    return {
        type: actionTypes.DELETE_CARD,
        id,
    }
}
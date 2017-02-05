import * as Actions from './actionTypes';

export function addSelection(selection) {
    return {
        type: Actions.ADD_SELECTION,
        selection
    }
}

export function removeSelection(selection) {
    return {
        type: Actions.REMOVE_SELECTION,
        selection
    }
}

export function submitBracket(bracket) {
    return {
        type: Actions.SUBMIT_BRACKET,
        bracket
    }
}

export function updateBrackets(bracket) {
    return {
        type: Actions.UPDATE_BRACKET,
        bracket
    }
}
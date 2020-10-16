import * as actionTypes from "../types"


export const authUser = user => {
    return {
        type: actionTypes.types.authenticateUser,
            payload: {
                authenticated: true
            }
    }
}

export const channelLister = channels => {
    return {
        type: actionTypes.types.channelList,
            payload: {
                channels
            }
    }
}

export const selectedChannel = channel => {
    return {
        type: actionTypes.types.chosenChat,
            payload: {
                ...channel
            }
    }
}

export const retrieveMessages = messages => {
    return {
        type: actionTypes.types.retrievedMessages,
            payload: {
                messages
            }
    }
}

export const retrieveUsers = users => {
    return {
        type: actionTypes.types.userList,
            payload: {
                users
            }
    }
}
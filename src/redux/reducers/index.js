import * as actionTypes from "../types"

export function reducers(state = {channelList: [], authenticateUser: false, currentUser: {name:
    "Madison",
    password:
    "wordPass",
    userId:
    "p2s0dwoqwAbk3tkDzbxE3S6cNbt2",
    userName:
    "Madi222"}, chosenChat: {docId: ""}, userList: [], retrievedMessages: []}, action) {
    switch (action.type) {
        case actionTypes.types.authenticateUser:
            return { ...state, authenticateUser: action.payload.authenticated}

        case actionTypes.types.channelList:
            return { ...state, channelList: action.payload.channels}

        case actionTypes.types.chosenChat:
            return { ...state, chosenChat: action.payload}

        case actionTypes.types.retrievedMessages: 
            return { ...state, retrievedMessages: action.payload.messages}

        case actionTypes.types.userList:
            return { ...state, userList: action.payload.users}

        default:
            return state
    }
};

//store.subscribe(() => console.log(store.getState()))

export default reducers;



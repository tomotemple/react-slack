import firebase from 'firebase';

export const db = firebase.firestore();

export function getChatList() {
    
    return db.collection('channels').get().then(response => {
        let channelArr = [];
        response.forEach(channel => {
            channelArr.push(channel.data());
            console.log(channel.data());
            
        })
        console.log(channelArr);
        return channelArr;
    },reject => {
        console.log(reject);
    });

};

export function getMessages() {
    const messagesPromise = new Promise((resolve, reject) => {
    
        return db.collection('messages').get().then(response => {
            let messageArr = [];
            response.forEach(message => {
                messageArr.push(message.data());
                console.log(message.data());
                return messageArr;
            })
            console.log(messageArr);
            resolve(messageArr);
        }), reject => {
            console.log(reject)
        }
    })
    return messagesPromise
}

export function addMessage(channelId, message, user) {

    db.collection('messages').add({channelId, message, user})
}
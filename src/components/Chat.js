import React from 'react';
import { connect } from 'react-redux';

const Chat = (props) => {

    const displayMessages = () => {
        console.log('I am wanting Dennys')
        return props.messages.map(message => {
            console.log(message.channelId)
            console.log(props.chosenChat)

            if (message.channelId === props.chosenChat.docId) {
                console.log('I will make the best inator!')
                let userObj = props.users.filter(user => {
                    if (message.user === user.userId) {
                        return user.name;
                    }

                })
                console.log(userObj[0].name)
                return (<div key={message.docId}>
                    <div>{userObj[0].name}</div>
                    <div>{message.message}</div>
                    </div>)
            } else {

            }
        })
    }
    


        return (
            
            <div>
                {
                    displayMessages()
                }
            </div>
        )
    }


const mapStateToProps = (state) => ({
    messages: state.retrievedMessages,
    chosenChat: state.chosenChat,
    users: state.userList,
})

export default connect(mapStateToProps, {})(Chat);
import React, { useState } from 'react';
import firebase from '../firebase'
import { connect } from 'react-redux';
import { addMessage, getMessages } from '../db';
import { retrieveMessages } from '../redux/actions';



const messageForm = (props) => {
    const [message, setMessage] = useState("")
    const sendMessage = (event) => {
        event.preventDefault()
        console.log(message)
        addMessage(props.chosenChat.docId, message, props.currentUser.userId)
        getMessages().then(resolve => {
            props.retrieveMessages(resolve)
        })
    }

        return (
            <div>
                <form onSubmit={ (e)=> sendMessage(e)}>
                    <label>
                        Send a message to the chat:
                        <input type="text" name="newMessage" onChange={(e) => setMessage(e.target.value)}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            );

}

            

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    chosenChat: state.chosenChat
})

const mapDispatchToProps = {
    retrieveMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(messageForm);
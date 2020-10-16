import React from 'react';
import TopMenu from './TopMenu';
import ChatMenu from './ChatMenu';
import Chat from './Chat';
import IdDisplay from './IdDisplay';
import TextBox from './TextBox';
import {db} from '../db';
import { connect } from 'react-redux';
import { retrieveMessages, retrieveUsers } from '../redux/actions/index'

class Home extends React.Component {

    getMessages = () => {

        return db.collection('messages').get().then(response => {
            let messageArr = [];
            response.forEach(message => {
                messageArr.push({...message.data(),docId: message.id});
                console.log(message.data());
                return messageArr;
            })
            this.props.retrieveMessages(messageArr);
            console.log(messageArr);
    
        }, reject => {
            console.log(reject)
        })
        
    }

    getUsers = () => {

        return db.collection('users').get().then(response => {
            let usersArr = [];
            response.forEach(user => {
                usersArr.push({...user.data(),docId: user.userId});
                console.log(user.data());
                return usersArr;
            })
            this.props.retrieveUsers(usersArr);
            console.log(usersArr);
    
        }, reject => {
            console.log(reject)
        })
        
    }


    componentDidMount() {
            let messageStorage = this.getMessages();
            console.log(messageStorage);
            this.getUsers()
    }


    render() {
        return (
            <div>
                <TopMenu />
                <ChatMenu />
                <Chat />
                <IdDisplay />
                <TextBox />
            </div>
        );
    }
}

const mapDispatchToProps = {
    retrieveMessages,
    retrieveUsers
}

export default connect(null, mapDispatchToProps)(Home);
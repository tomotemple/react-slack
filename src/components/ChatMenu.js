import { channelLister, selectedChannel } from '../redux/actions/index';
import { connect } from 'react-redux';
import React from 'react';
//import { getChatList } from '../db';
import firebase from 'firebase';

const db = firebase.firestore();

class ChatMenu extends React.Component {

    async getChatList() {
    
    return await db.collection('channels').get().then(response => {
        let channelArr = [];
        response.forEach(channel => {
            channelArr.push({...channel.data(),docId: channel.id});
            console.log(channel.id);
            
        })
        console.log(channelArr);
        this.props.channelLister(channelArr);
        return channelArr;
    },reject => {
        console.log(reject);
    });

};

    componentDidMount() {
        let chatListDisplay = this.getChatList().then(response => {
            this.setState({chatList: response}) 
            return response;
        });
        console.log(chatListDisplay)
    };

    chatClicker = (channelObject) => {
        this.props.selectedChannel(channelObject)
    }

    displayChannelName = () => {
        return this.props.channels.map((channel, index)=> {
                if (channel.docId === this.props.chosenChat.docId) {
                    return (<div onClick={() => this.chatClicker(channel)} key={index} className="chatNameDisplay activeChat"> 
                    {channel.name} 
                    </div>)
                } else if (this.props.chosenChat.docId === ""){
                    return (<div onClick={() => this.chatClicker(channel)} key={index} className="chatNameDisplay"> 
                    {channel.name} 
                    </div>)
                } else {
                    return (<div onClick={() => this.chatClicker(channel)} key={index} className="chatNameDisplay"> 
                    {channel.name} 
                    </div>)
                }
        })
    };

    render() {
        console.log(this.state);
        console.log(this.props.channels);
        this.props.channels ? this.props.channels.map(channel => {console.log(channel.name)}): console.log('doesnt exist');

        return (
        <div id="chatMenuDisplay">
            Chat Menu
        <div>{this.props.channels && this.displayChannelName()}</div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    channels: state.channelList,
    chosenChat: state.chosenChat,
});

const mapDispatchToProps = {
    channelLister,
    selectedChannel
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu);
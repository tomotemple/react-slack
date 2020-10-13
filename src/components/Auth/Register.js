import React from 'react';
import firebase from '../../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Register extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConvirmation: '',
        errors: [],
        loading: false
    };

    isFormValid = () => {
        let errors = [];
        let error;
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            this.setState({ errors: [], loading: true});
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser);
                this.setState({ loading:false})
            })
            .catch(err => {
                console.error(err);
                this.setState({loading: false})
            })
        }
    }

    handleChange
    
    render() {
        const { username, email, password, passwordConfirmation} = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange"/>
                        Register for Devchat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input 
                            fluid name="username" 
                            icon="user" 
                            iconPosition="left" 
                            placeholder="Username" 
                            onChange={this.handleChange} 
                            value={username}
                            type="text"/>
                        
                            <Form.Input 
                            fluid name="email" 
                            icon="mail" 
                            iconPosition="left" 
                            placeholder="Email" 
                            onChange={this.handleChange} 
                            value={email}
                            type="email"/>

                            <Form.Input 
                            fluid name="password" 
                            icon="lock" iconPosition="left" 
                            placeholder="Password" 
                            onChange={this.handleChange} 
                            value={password}
                            type="password"/>

                            <Form.Input 
                            fluid name="passwordConfirmation" 
                            icon="repeat" 
                            iconPosition="left" 
                            placeholder="Password Confirmation" 
                            onChange={this.handleChange} 
                            value={passwordConfirmation}
                            type="password"/>

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Are You Already A User?<Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
            )
    }
}

export default Register;
import React from 'react';
import { authUser } from '../../redux/actions/index';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
    
    render() {
        return (
            <div>

                <label>
                    email:
                    <input type="text"/>
                </label>
                <label>
                    password:
                    <input type="text"/>
                </label>
                <Button onClick={this.props.authUser}>
                    Login
                </Button>
                <Link to="/register">
                        Register
                </Link>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    authenticated: state.authenticateUser
});

const mapDispatchToProps = {
    authUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);


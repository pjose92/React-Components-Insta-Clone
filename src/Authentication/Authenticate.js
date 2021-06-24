import React from 'react';
import myStorage from '../Storage'
import Login from '../components/Login/Login.js'


const Authenticate = App => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            user: ""
        }
    }


    //checking to see if there is a user in local storage
    componentDidMount(){
        if(myStorage.getObject('user')){
            this.setState({loggedIn: true})
            this.setState({user:myStorage.getObject('user')})
        }

    }

    login = (username, password) => {
        myStorage.setObject('user', {username: username});
        this.setState({user: myStorage.getObject('user').username})
    }

    toggleLogin = () => {
        this.setState((prevState,props) => {
            return {loggedIn: !prevState.loggedIn}
        })
    }

    render() {
        console.log(this.state)
        return this.state.loggedIn?(
            <App user={this.state.user} />
        ) : (
            <Login login={this.login} toggleLogin={this.toggleLogin} />
        ) ;
    }
}

export default Authenticate
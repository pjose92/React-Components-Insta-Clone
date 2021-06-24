import React, { Component } from 'react';
import logo from '../../Img/Insta.png'
import { Button, Input } from '../../Styles/Reusables'
import styled from 'styled-components'
import appstore from '../../Img/appstore.png'

const LoginContainer= styled.div`
    display: flex;
    flex-direction: column;
    max-width:250px;
    margin: 0 auto;
    margin-top:10%;
    border: 1px solid rgba(var(--b6a,219,219,219),1); 
    padding: 8% 5%;
    background-color: white;
`
const StyledForm= styled.form`
    padding: 5px;
    max-width:  250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const InstagramLogo = styled.img`
    height: 90px;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
        }
    }

    // this is not dry and I would like to ask how to handle this
    changeHandler= event=>{
        this.setState({[event.target.name]: event.target.value})
    }

    // handles the submit an event by passing props up to app, 
    // and passing props up to the authenticate component
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.login(this.state.username,this.state.password)
        this.props.toggleLogin();
    }

    render() { 
        return ( 
            <LoginContainer>
                <InstagramLogo src={logo} alt=""/>
                <StyledForm action="" onSubmit={this.submitHandler}>
                    <Input type="text" 
                        name="username" 
                        placeholder="Phone number, username, or email"
                        value={this.state.username}
                        onChange={this.changeHandler} 
                    />
                    <Input type="password" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandler} 
                    />
                    <Button primary type="submit">Log In</Button>
                </StyledForm>
            </LoginContainer>
        );
    }
}

export default Login
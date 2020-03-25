import React, { Component } from 'react';
import logo from '../../Img/Insta.png'
import { Button, Input } from '../../Styles/Reusables'
import styled from 'styled-components'

const LoginContainer= styled.div`
    display: flex;
    flex-direction: column;
    max-width:250px;
    margin: 0 auto;
    margin-top:10%;
`
const StyledForm= styled.form`
    padding: 5px;
    max-width:  250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const InstagramLogo = styled.img`
    height: 80px;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
        this.props.toggleLogin();
    }

    render() {
        return (
            <LoginContainer>
                <InstagramLogo src={logo} alt="" />
                <StyledForm action="" onSubmit={this.submitHandler}>
                    <Input 
                        type="text"
                        name="username"
                        placeholder="phone number, username, or email"
                        value={this.state.username}
                        onChange={this.changeHandler}
                    />
                    <Button primary type="submit">Log In</Button>
                </StyledForm>
            </LoginContainer>
        )
    }
}

export default Login
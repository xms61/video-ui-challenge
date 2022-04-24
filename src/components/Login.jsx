import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Image, InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { LOADING, LOGIN_SUCCESS } from '../actions/actionTypes'

function Login() {

    const dispatch = useDispatch()

    function login(){
      dispatch({type: LOADING})
      dispatch({type: LOGIN_SUCCESS})
    }

  return (
    <Container fluid>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Login</Card.Title>
            <InputGroup className="mb-4 ">
            <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
            <FormControl
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-4">
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <Form.Control type="password" placeholder="" />
            </InputGroup>
            <LinkContainer to={'/overview/'}><Button variant="primary" className='mt-2 mb-2 ms-1' onClick={() => login()}>Login</Button></LinkContainer>
            <LinkContainer to={'/overview/'}><Image width='150px' src={require('../assets/g-sign-in.jpg')} onClick={() => login()}></Image></LinkContainer>
        </Card.Body>
    </Card>
    </Container>
  )
}

export default Login
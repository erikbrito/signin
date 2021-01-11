import React from 'react'
import { Card } from 'react-bootstrap';

import SignIn from './SignIn/signin'
import Register from './Register/Register'

import { useSelector } from 'react-redux'

import './card.scss'

const CardSignIn = () => {
  const screen = useSelector(state => state.homeReducer.screen)

  return (
    <Card>
      <Card.Header className="text-center" >Invision</Card.Header>
        { screen ? <Register />  : <SignIn /> }
    </Card>
  )
}

export default CardSignIn
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input/input'
import useValidation from './hooks/useValidation'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'

import actions from '../../../Redux/Actions'

import './signin.scss'

const initialFormState = {
  email: 'email@email.com',
  password: '123456'
}

const SignIn = () => {
  const FormValidations = Yup.object().shape({
    email: Yup
      .string()
      .email("E-mail is invalid")
      .required('E-mail is required'),
    password: Yup
      .string()
      .min(6, 'Minimum 6 characters')
  })

  const [form, setForm] = useState(initialFormState)
  const { errors } = useValidation(form, FormValidations)

  const setInput = (newValue) => {
    setForm(form => ({ ...form, ...newValue }))
  }

  const dispatch = useDispatch()

  function login() {
    dispatch(actions.login(form))
  }

  function changeScreen() {
    dispatch(actions.screenRegister())
  }

  return (
    <>
      <form>
        <div className="form-group">
          <Input
            name="email"
            onChange={e => setInput({ email: e.target.value })}
            label="E-mail"
            value={form.email}
            error={errors.email}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            name="password"
            onChange={e => setInput({ password: e.target.value })}
            label="Password"
            value={form.password}
            error={errors.password}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={() => login()}>Submit</button>
        </div>

        <div id="div-google">
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p class="btn-text"><b>Sign in with google</b></p>
          </div>
        </div>

        <div>
          <Link id="link-register" onClick={() => changeScreen()}>Novo no Invision? Crie uma conta</Link>
        </div>
      </form>
    </>
  )
}

export default SignIn
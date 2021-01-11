import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input/input'
import useValidation from './hooks/useValidation'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'

import actions from '../../../Redux/Actions'

const initialFormState = {
  name: 'yourname',
  email: 'email@email.com',
  password: '123456'
}

const Register = () => {
  const FormValidations = Yup.object().shape({
    name: Yup
      .string()
      .required('Name is required'),
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

  function register() {
    dispatch(actions.register(form))
  }
  
  function changeScreen() {
    dispatch(actions.screenSignin())
  }

  return (
    <>
      <form>
        <div className="form-group">
          <Input
            name="name"
            onChange={e => setInput({ name: e.target.value })}
            label="Name"
            value={form.name}
            error={errors.name}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
        </div>
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
          <button type="button" className="btn btn-primary" onClick={() => register()}>Submit</button>
        </div>

        <div>
          <Link id="link-register" onClick={() => changeScreen()}>Já está no Invision? Entre</Link>
        </div>
      </form>
    </>
  )
}

export default Register
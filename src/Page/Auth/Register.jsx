import React from 'react'
import Form from './Components/Form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../Config'

const Register = () => {

  const navigate = useNavigate()      //new hook to navigate to another route

  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, data)
      console.log(response)

      if (response.status === 201){
        navigate('/')
      }else{
        alert("Registration failed")
      }
    } catch (error) {
      alert(error?.response?.data?.message)     //what is there to check the null oe undefined value.
    }
  }
  return (
    <>
       <Form type='Register' onSubmit={handleRegister} />
    </>
  )
}

export default Register
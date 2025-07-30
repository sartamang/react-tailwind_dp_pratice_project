import React from 'react'
import Form from './Components/Form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../Config'

const Login = () => {
 

  const navigate = useNavigate()

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/login` , data)
      console.log(response)

      if (response.status === 200){
        navigate('/')
      }else{
        alert("Login failed")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <>
        <Form type='Login' onSubmit={handleLogin} />
    </>
  )
}

export default Login
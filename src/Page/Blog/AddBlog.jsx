import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Form from './Components/Form/Form'
import { baseUrl } from '../../Config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBlog = () => {

  const navigate = useNavigate()

  const handleCreateBlog = async (data) =>{
    try {
      const response = await axios.post(`${baseUrl}/blog`, data ,{
      headers: {
        "Content-Type" : "multipart/form-data",
        "Authorization" : localStorage.getItem('token')
      }
    })

    if (response.status === 201){
      navigate('/')
    }
    else{
      alert("Something went wrong")
    }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
    <>
        <Layout>
            <Form type='Create' onSubmit={handleCreateBlog} />
        </Layout>
    </>
  )
}

export default AddBlog
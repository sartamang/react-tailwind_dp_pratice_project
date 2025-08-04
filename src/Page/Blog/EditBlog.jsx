import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Form from './Components/Form/Form'
import { baseUrl } from '../../Config'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBlog = () => {

  const {id} = useParams()
  const [editedBlog, setEditedBlog] = useState({})
  const navigate = useNavigate()

  const editBlog = async (eblog) => {
  
    try {
      const response =await axios.patch(`${baseUrl}/blog/${id}`,eblog,{
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token')
      }
      })

      if (response.status === 200){
        navigate(`/blog/${id}`)
      }
      else{
        alert("Something went wrong!!")
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }

   const handleChange = (e) => {
      const {name, value} = e.target
      setEditedBlog({
        ...editedBlog,
        [name] : name === 'image' ? e.target.files[0] : value
      })
    }

    const fetchBlog = async () =>{
      const response = await axios.get(`${baseUrl}/blog/${id}`)
      if (response.status === 200){
      setEditedBlog(response.data.data)
    }
    }
    
 
  useEffect( () => {
    fetchBlog()
  },[])
  return (
    <>
      <Layout>
        <Form type='Edit' onSubmit={editBlog} data={editedBlog}
        onChange={handleChange} />
      </Layout>
    </>
  )
}

export default EditBlog
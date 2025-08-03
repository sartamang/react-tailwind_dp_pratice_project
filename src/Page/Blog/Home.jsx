import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Layout from '../../Components/Layout/Layout'
import Card from './Components/Card'
import axios from 'axios'
import {baseUrl} from '../../Config'

const Home = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`)
    if(response.status === 200){
      setBlogs(response.data.data)  //2nd data vanya chai backend vitra ko ho... response.data kitra ni 2ta chiz hunxa jasma data vanny ma chai chaiyeko data hunxa
    }
  }

  useEffect(() => {
    fetchBlogs()
  },[])
  return (
    <>
        <Layout>
            <div className='flex flex-wrap justify-center gap-5 m-5'>
              {
                blogs.length > 0 && blogs.map ((blog) => {    //yedi blogs chai 0 vanda badi xa vany balla map use hu vanerw banako
                  return(
                    <Card blog={blog}/>
                  )
                })
              }
            </div>
        </Layout>
    </>
  )
}

export default Home
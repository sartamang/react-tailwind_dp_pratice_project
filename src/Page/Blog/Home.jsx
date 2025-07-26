import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Layout from '../../Components/Layout/Layout'
import Card from './Components/Card'


const Home = () => {
  return (
    <>
        <Layout>
            <div className='flex flex-wrap justify-center gap-5 m-5'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Layout>
    </>
  )
}

export default Home
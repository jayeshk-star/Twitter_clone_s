import React from 'react'
import './Home.css'
import Sidebar from "./Sidebar"
import Twittes from './Twittes';
import Trends from './Trends';

const Home = () => {
  return (
    <>
     <Sidebar />
     <Twittes />
     <Trends />
    </>
  )
}

export default Home

import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import JobListing from './JobListing';
import JobPosting from './JobPosting';
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/jobListing" element={<JobListing/>}></Route>
        <Route path="/jobPosting" element={<JobPosting/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes
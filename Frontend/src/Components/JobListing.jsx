import { Button, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobGET } from '../Redux/Job/job.action'
import Header from './Header'
const JobListing = () => {
    const dispatch=useDispatch()
    let[filterbyRole,setFilterByRole]=useState("");
    let[sortbyDate,setSortbyDate]=useState("")
    let[page,setPage]=useState(1);
    const {data}=useSelector((state)=>state)
    const{totalPages}=useSelector((state)=>state)
    console.log(data)
    useEffect(()=>{
    dispatch(jobGET(filterbyRole,sortbyDate,page))
    },[filterbyRole,sortbyDate,page])
  return (
    <div>
        <Header/>
        <div style={{backgroundColor:"#eef9f9",height:"full"}}>
        <h1 style={{fontSize:"20px",fontWeight:700}}>Job Listing</h1>
        <Input w="30%" bg="white" mb="1%" type="search" placeholder="Search by language" />
        <div style={{display:"flex", width:"50%", margin:"auto", justifyContent:"space-between"}}>
        <Select style={{backgroundColor:"white"}}mr="3%"placeholder='Select Role' onChange={(e)=>setFilterByRole(e.target.value)}>
          <option value="FullStack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </Select>
        <Select mr="3%" style={{backgroundColor:"white"}} placeholder='Select Role' onChange={(e)=>setSortbyDate(e.target.value)}>
          <option value="desc">Latest</option>
          <option value="asc">Oldest</option>
        </Select> 
        </div>
        <div style={{marginTop:"2%", display:"flex",justifyContent:"space-around"}}>
            <Button colorScheme="teal" disabled={page<=1} onClick={()=>setPage(page-1)}>Previous</Button>
            <Button colorScheme="teal" disabled={totalPages<=1} onClick={()=>setPage(page+1)}>Next</Button>
        </div>
        <div >
            {data.map((el)=>(
                <div key={el._id} style={{display:"flex",alignItems:"center" ,justifyContent:"space-around",width:"70%",margin:"auto",marginTop:"2%",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"white",padding:"10px"}}>
                    <img width="13%" height="10%" style={{borderRadius:"100%" ,border:"2px solid skyblue",marginLeft:"10px"}}src="https://img.freepik.com/premium-vector/we-are-hiring-banner-vacancy-announcement-hiring-recruiting-employees_349999-1252.jpg?w=2000" alt="logo"/>
                    <div>
                    <Text fontSize='xl' color='tomato' as='b'>{el.company}</Text>
                    <p>{el.position}</p>
                    <p>{el.postedAt.split("T")[0]}<span style={{marginLeft:"6px"}}>. {el.contract}</span><span style={{marginLeft:"6px"}}>. {el.location}</span></p>
                    </div>
                    <div>
                      <Button colorScheme="blue"mr="6px">{el.role}</Button> 
                      <Button colorScheme="blue"mr="6px">{el.level}</Button> 
                      <Button colorScheme="blue" mr="6px">{el.language}</Button> 
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}
export default JobListing
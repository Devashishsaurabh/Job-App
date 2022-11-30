import React, { useState } from 'react'
import Header from './Header'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { jobPost } from '../Redux/Job/job.action'
import { useToast } from '@chakra-ui/react'
const JobPosting = () => {
    const dispatch=useDispatch()
    const toast = useToast()
    const[data,setData]=useState({
    company:"",
    city:"",
    location:"",
    role:"",
    level:"",
    contract:"",
    position:"",
    language:""
    })
    const handlechange=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(data)
        dispatch(jobPost(data))
        .then((res)=>{
            toast({
                title: 'Job Listed Succesfull.',
                description: "We've Listed your Job for Candidate.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        })
    }
  return (
    <div>
        <Header/>
        <h1 style={{fontSize:"20px",fontWeight:700}}>Job Posting</h1>
       <FormControl w="70%" m="auto" isRequired>
       <FormLabel>Company</FormLabel>
       <Input type='text' placeholder='Enter Company Name' name="company" onChange={handlechange}/>
       <FormLabel>City</FormLabel>
       <Input type='text' placeholder='Enter City Name' name="city" onChange={handlechange}/>
       <FormLabel>Location</FormLabel>
       <Input type='text' placeholder='Enter Location Name' name="location" onChange={handlechange}/>
       <FormLabel>Role</FormLabel>
       <Select placeholder='Select Role' name="role" onChange={handlechange}>
          <option value="FullStack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </Select>
        <FormLabel>Level</FormLabel>
       <Select placeholder='Select Level' name="level" onChange={handlechange}>
          <option value="Junior">Junior</option>
          <option value="Midweight">Midweight</option>
          <option value="Senior">Senior</option>
        </Select>
        <FormLabel>Contract</FormLabel>
       <Select placeholder='Select Contract' name="contract" onChange={handlechange}>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </Select>
        <FormLabel>Position</FormLabel>
        <Input type='text' placeholder='Enter Position' name="position" onChange={handlechange}/>
        <FormLabel>Language</FormLabel>
        <Select placeholder='Select Language' name="language" onChange={handlechange}>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Rubi">Rubi</option>
        </Select>
        <Button mt="6px" colorScheme="green" type="submit" onClick={handleSubmit}>Submit</Button>
       </FormControl>
    </div>
  )
}

export default JobPosting
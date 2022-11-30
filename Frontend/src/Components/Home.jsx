import { Text } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <Text style={{fontSize:"18px",fontWeight:700}} mt="5px">I You Want to Post Job Detail Click On Job Posting or Job Listing</Text>
    </div>
  )
}

export default Home
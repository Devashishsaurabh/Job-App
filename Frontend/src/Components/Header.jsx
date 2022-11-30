import React from 'react'
import {Flex,HStack , chakra, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <chakra.header id="header">
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-around"
          border="1px solid grey"
          >
          <Link to="/"><Heading>MASAI JOB-APP</Heading></Link>
          <HStack as="nav" spacing="20">
            <Link to="/jobPosting"><Text style={{fontSize:"18px",fontWeight:700}}>Job Posting</Text></Link>
            <Link to="/jobListing"><Text style={{fontSize:"18px",fontWeight:700}}>Job Listing</Text></Link>
          </HStack>
        </Flex>
      </chakra.header>
        )
}

export default Header
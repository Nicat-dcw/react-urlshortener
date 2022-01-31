import Head from 'next/head'
import Image from 'next/image';
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import { Input,Stack,InputGroup,InputLeftAddon } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  const shortUrl = async event => {
    event.preventDefault()
    fetch('/api/test', {
      body: JSON.stringify({
        link: event.target.url.value
,
         custom: event.target.customname.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(json => json.json()).then(data => {
      setData(data.message);
    })
  }

  return (
   <> 
<div class="w-full rounded-lg p-5 border border-4 border-green-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
 <h1 className="text-center bg-white text-green-800"> Shorter </h1>
    
    </div>


    
  
  
    <Box bg='brand.900' w='100%' p={4} color='white' className="rounded-lg bg-gradient sticky transition-all duration-200 w-full -top-header bg-white/0 dark:bg-black/0">
  <p className="text-3xl font-bold  text-center brand.800 hover:text-green-400">
Build Your Short URL'S
    </p>
</Box>
    <form onSubmit={shortUrl}>
     <Box bg='brand.800' w='100%' p={4} color='white'>
    <Stack spacing={4}>
  <InputGroup>
    <Input name="url" type='url' placeholder='Website Link'  focusBorderColor='#2ac7ad' required />
  </InputGroup>

  <InputGroup size='sm'>
    <InputLeftAddon className="text-sky-400" children='https://ushort.fun/' />
    <Input name="customname" placeholder='mysite'  focusBorderColor='#2ac7ad' required />
    </InputGroup>
</Stack>
    </Box>
      <Box bg='brand.800' w='100%' p={4} color='white'>
<center>
   <Button type="submit" colorScheme='blue' className="bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">Short !</Button>
    </center>
    </Box>
    
    </form>
      <Box bg='green.800' w='100%' p={4} color='white'>
    </Box>
      <Box className="rounded-md w-full p-5" bg='brand.900' w='100%' p={4} color='white'>


    <Alert status='warning'>
    <AlertIcon />
    <p class="w-full rounded-full p-5 text-green-500">{data || "Not Found"} </p>
  </Alert>
    
    </Box>
    </>
  )
}

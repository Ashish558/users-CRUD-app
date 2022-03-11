import React from 'react'
import { Box } from '@mui/material'
import Form from '../components/form/form'
import Table from '../components/Table/table'

const Home = () => {

   return (

      <Box sx={{backgroundColor:'#eef0f9e3', minHeight: '100ch' }}>
         <Table />
         <Form />
      </Box>
   )
}

export default Home

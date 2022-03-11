import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import { toggleFormVisibility } from '../app/slices/form'

export default function Header() {

    const dispatch = useDispatch()
    return (
        <Box mb='17px' >
            <Typography variant='h5' fontSize='16px' fontWeight='bold' sx={{ ml: 1, mb: 2 }} > Users </Typography>
            <Button variant='contained' endIcon={<AddIcon />} sx={styles.btn}
                onClick={() => dispatch(toggleFormVisibility(true))} > Add user</Button>
        </Box>

    )
}

const styles = {
    btn: {
        boxShadow: 'none',
        backgroundColor: 'background.blue',
        '&: hover': {
            boxShadow: 'none',
            backgroundColor: '#1081e8f5',
        }
    }
}

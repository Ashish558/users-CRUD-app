import React from 'react'
import { Box, Modal } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFormVisibility, updateIsEditing } from '../../app/slices/form'
import Formfields from './formFields'

export default function Form() {
    const dispatch = useDispatch()

    const { isFormActive } = useSelector(state => state.form)
    const handleClose = () =>{ 
        dispatch(updateIsEditing(false))
        dispatch(toggleFormVisibility(false))
    }

    return (
        <Modal open={isFormActive} onClose={handleClose} sx={{display: 'flex', justifyContent:'center', alignItems:'center' }} >
           <Box sx={styles.form} >
               <Formfields />
           </Box>
        </Modal>
    )
}


const styles = {

    form: {
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0px 8px 24px rgb(0 0 0 / 25%)',
        borderRadius: '8px 8px',
        background: 'white',
        py: 3,
        px: 2,
    },
 
   
}
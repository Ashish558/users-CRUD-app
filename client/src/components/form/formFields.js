import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { clearForm, toggleFormVisibility, updateEmail, updateName, updatePhoneNumber } from '../../app/slices/form'
import InputField from './input'
import { addUser, editUser, getUsers } from '../../services/users'
import HobbyInput from './hobbyInput'
import { updateUsers } from '../../app/slices/users'

export default function Formfields() {

    const { name, email, phoneNumber, hobbies, isEditing } = useSelector(state => state.form)
    const { userId } = useSelector(state => state.selectedUser)
    const [errMsg, setErrMsg] = useState('')

    const dispatch = useDispatch()

    const getAllUsers = () => {
        getUsers((err, data) => {
            if (err) return console.log(err)
            const tempData = data.map((item, index) => {
                return { ...item, number: index + 1 }
            })
            dispatch(updateUsers(tempData))
        })
    }
    console.log(errMsg)
    const handleClick = () => {
        const data = { name, email, phoneNumber, hobbies }
        if (!name | !email | !phoneNumber) return console.log('fill all fields')
        addUser(data, (err, res) => {
            console.log(res)
            if (res.status === 202) return setErrMsg(res.data)
            dispatch(toggleFormVisibility(false))
            console.log(res.data)
            dispatch(clearForm())
            getAllUsers()
            setErrMsg('')
        })
    }

    const handleEdit = () => {
        const data = { name, email, phoneNumber, hobbies, _id: userId }
        editUser(data, (err, res) => {
            if (err) return console.log(err)
            console.log(res)
            // dispatch(updateUsers(res))
            dispatch(toggleFormVisibility(false))
            dispatch(clearForm())
            getAllUsers()
            setErrMsg('')
        })
    }


    return (
        <Box>
            <Typography variant='h4' fontSize='16px' fontWeight='600' mb='16px' >
                {isEditing ? 'Edit User' : ' Add user'}
            </Typography>

            <Typography variant='p' fontSize='15px'  color='#e72b2b' mb='8px' textAlign='center' >
                {errMsg}
            </Typography>

            <Box mb='16px' >
                <InputField type='text' label='Name' value={name} setValue={updateName} />
                <InputField type='email' label='Email' value={email} setValue={updateEmail} />
                <InputField type='number' label='Phone Number' value={phoneNumber} setValue={updatePhoneNumber} />
                <HobbyInput />
            </Box>

            {isEditing ?
                <Button sx={styles.btn} onClick={handleEdit}>Edit</Button>
                :
                <Button sx={styles.btn} onClick={handleClick}>Save</Button>
            }

        </Box>
    )
}


const styles = {
    btn: {
        boxShadow: 'none',
        backgroundColor: 'background.blue',
        color: 'white',
        '&: hover': {
            boxShadow: 'none',
            backgroundColor: '#1081e8f5',
        }
    }
}

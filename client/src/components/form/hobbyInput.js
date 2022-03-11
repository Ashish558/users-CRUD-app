import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearHobbies, updateHobbies } from '../../app/slices/form'
import DeleteIcon from '@mui/icons-material/Delete'

export default function HobbyInput() {

    const dispatch = useDispatch()

    const { hobbies } = useSelector(state => state.form)
    const [hobby, setHobby] = useState('')

    const handleClick = () => {
        if (hobbies.includes(hobby)) return
        dispatch(updateHobbies(hobby))
    }

    return (
        <Box>
            <Box>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='h5' fontSize='16px' fontWeight='bold' sx={{ mb: '6px' }}>Hobbies </Typography>
                    <DeleteIcon sx={{ color: '#e72b2b' }} onClick={()=> dispatch(clearHobbies())} />
                </Stack>
                <Stack direction='row' alignItems='center' mb='16px' spacing={1} flexWrap='wrap' >
                    {hobbies.map(hobby => {
                        return <Typography key={hobby} fontSize='14px' color='#888887'  > {hobby} </Typography>
                    })}
                </Stack>
            </Box>


            <Stack direction='row' alignItems='center' >
                <TextField required={true} fullWidth
                    name='hobby'
                    label='Hobby'
                    size='medium'
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    variant="standard"
                    InputLabelProps={{ required: false }}
                    InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #dadada' }

                    }}
                    sx={{ mb: 2, mr: 2 }} />
                <Button sx={styles.btn} onClick={handleClick} >
                    Add
                </Button>
            </Stack>

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


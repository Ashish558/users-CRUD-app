
import React from 'react'
import { TextField } from '@mui/material'

import { useDispatch } from 'react-redux'

const InputField = ({ label, value, setValue, type, size }) => {
    const dispatch = useDispatch()
    return (

        <TextField required={true} fullWidth
            name={label}
            label={label}
            type={type}
            size={size ? size : 'medium'}

            value={value}
            onChange={(e) => dispatch(setValue(e.target.value))}

            variant="standard"
            InputLabelProps={{ required: false }}
            InputProps={{
                disableUnderline: true,
                style: { borderBottom: '1px solid #dadada' }

            }}
            sx={{ mb: 2, }} />


    )
}


export default InputField

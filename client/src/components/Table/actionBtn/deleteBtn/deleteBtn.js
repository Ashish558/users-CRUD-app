import React, { useState } from 'react'
import { MenuItem } from '@mui/material'
import DeletePostModal from './deletePostModal';

export default function DeleteBtn({ _id, setAnchorEl }) {

    const [open, setOpen] = useState(false)

    const deletePost = () => {
        setOpen(true)
    }

    return (
        <>
            <MenuItem onClick={deletePost} sx={{ ...styles.link }} >
                Delete
            </MenuItem>
            {open && <DeletePostModal _id={_id} open={open} setOpen={setOpen} setAnchorEl={setAnchorEl} />}

        </>
    )
}


const styles = {
    link: {
        color: 'rgb(0 0 0 / 67%)',
        textDecoration: 'none',
        fontSize: '14.5px',
        borderRadius: '3px'
    }
}
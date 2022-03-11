import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Menu, MenuItem } from '@mui/material'
import { withStyles } from '@material-ui/core/styles'

import DeleteBtn from './deleteBtn/deleteBtn'
import { toggleFormVisibility, updateFormFields, updateIsEditing } from '../../../app/slices/form'
import { updateSelectedUser } from '../../../app/slices/selectedUser'


function ActionBtn(props) {
    const { classes, _id } = props
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);


    const editPost = () => {
        dispatch(updateIsEditing(true))
        dispatch(toggleFormVisibility(true))
        let selectedUser = users.find(user => user._id === _id )
        dispatch(updateSelectedUser(selectedUser._id))
        dispatch(updateFormFields({...selectedUser}))
    }

    return (
        <div>
            <MoreHorizIcon id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={styles.icon} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                classes={{ list: classes.list }}
            >

                <MenuItem onClick={editPost} sx={{ ...styles.link }} >
                    Edit
                </MenuItem>
                <DeleteBtn setAnchorEl={setAnchorEl} _id={_id} />
            </Menu>
        </div>
    )
}

const styles = {
    link: {
        color: 'rgb(0 0 0 / 67%)',
        textDecoration: 'none',
        fontSize: '14.5px',
        borderRadius: '3px'
    },
    icon: {
        '&:hover': {
            backgroundColor: '#f3f3f3',
        },
    }
}

const classes = theme => ({
    list: {
        padding: '0',
        width: '92px',
    }
})

export default withStyles(classes)(ActionBtn)
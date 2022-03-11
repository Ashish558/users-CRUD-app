import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteUser, getUsers } from '../../../../services/users';
import { useDispatch } from 'react-redux';
import { updateUsers } from '../../../../app/slices/users';


export default function DeletePostModal({ _id, open, setOpen, setAnchorEl }) {

    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false)
        setAnchorEl(null)
    }

    const handleClick = () => {
        deleteUser(_id, (err, res) => {
            if (err) return console.log(err)
            setOpen(false)
            setAnchorEl(null)
            getUsers((err, data) => {
                if (err) return console.log(err)
                const tempData = data.map((item, index) => {
                    return { ...item, number: index + 1 }
                })
                dispatch(updateUsers(tempData))
            })
        })
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ boxShadow: 'none' }}
                BackdropProps={{ style: { backgroundColor: 'rgba(10,10,10,0.4)' } }}
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to delete this post
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Once deleted you cannot undo this action
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'flex-start', px: 3, py: 2 }} >
                    <Button onClick={handleClick} variant='contained' color='error' autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
import React, { useEffect } from 'react'
import { Box, Table, TableBody, TableContainer } from '@mui/material'
import { withStyles } from '@material-ui/core/styles'

import { getUsers } from '../../services/users'
import TableColumns from './tableColumns'
import { useDispatch, useSelector } from 'react-redux'
import SingleRow from './singleRow'
import { updateUsers } from '../../app/slices/users'
import Header from '../header'

const fnStyles = theme => ({
    root: {
        display: 'flex',
        overflowX: 'hide',
     
    },
    table: {
        minWidth: 300,
    },
    tableCell: {
        padding: '8px 10px'
    }
})

function UsersTable(props) {

    const { classes } = props
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        getUsers((err, data) => {
            if (err) return console.log(err)
            const tempData = data.map((item, index) => {
                return { ...item, number: index + 1 }
             })
            dispatch(updateUsers(tempData))
        })
    }, [])

   
    return (
        <Box sx={{ backgroundColor: 'white', px: 1, py: 2, pl: 1.5, borderRadius: '10px' }} >
            <Header />
            <TableContainer component={'div'} >
                <Table className={classes.table}
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                >
                    <TableColumns classes={classes} styles={styles} />
                    <TableBody>
                        {users.map(user => {
                            return <SingleRow key={user._id} {...user} />
                        })}
                    </TableBody>

                </Table>
               
            </TableContainer>
        </Box>
    )
}


const styles = {
    cell: {
        color: 'rgb(0 0 0 / 57%)',
        padding: '8px 10px',
        borderBottom: 0,
    }
}

export default withStyles(fnStyles)(UsersTable);
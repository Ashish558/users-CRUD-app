import React from 'react'
import { TableCell, TableRow, Typography, Box } from '@mui/material'
import { withStyles } from '@material-ui/core/styles';
import ActionBtn from './actionBtn/actionBtn';

const fnStyles = theme => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hide',
    },
    table: {
        minWidth: 340,
    },
    tableCell: {
        padding: '21px 10px',
        fontSize: '14px'
    }
});

function SingleRow(props) {
    const { _id, classes, number, name, phoneNumber, email, hobbies } = props


    return (
        <TableRow>
            <TableCell className={classes.tableCell} sx={{ ...styles.cell }} component="th" scope="row">
                <Typography component='p' variant='p' sx={styles.number} >
                    {number}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} sx={{ ...styles.cell }} component="th" scope="row">
                <Typography component='p' variant='p'>
                    {name}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} sx={{ ...styles.cell }} component="th" scope="row">
                <Typography component='p' variant='p'>
                    {phoneNumber}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} sx={{ ...styles.cell }} component="th" scope="row">
                <Typography component='p' variant='p'>
                    {email}
                </Typography>
            </TableCell>
            <TableCell className={classes.tableCell} sx={{ ...styles.cell, maxWidth: '300px' }} component="th" scope="row">
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
                    {hobbies.map((hobby, idx) => {
                        return <Typography mr='3px' key={hobby} component='p' variant='span'> {hobby} {idx !== hobbies.length - 1 && ','} </Typography>
                    })}
                </Box>

            </TableCell>


            <TableCell className={classes.tableCell} sx={styles.cell} align='right' >
                <ActionBtn _id={_id} />
            </TableCell>

        </TableRow>
    )


}
const styles = {

    cell: {
        color: 'rgb(0 0 0 / 57%)',
        borderBottom: 0,
        padding: '8px 10px',
    },
    number: {
        width: '25px',
        height: '25px',
        fontWeight: '600',
        padding: '4px 8px',
        backgroundColor: 'background.blue',
        textAlign: 'center',
        borderRadius: '3px',
        color: 'white',
        fontSize: '12px'
    },
}

export default withStyles(fnStyles)(SingleRow);
import React from 'react'
import { TableHead, TableCell, TableRow } from '@mui/material'

export default function TableColumns({ classes, styles }) {


    return (
        <TableHead>
            <TableRow>
                <TableCell className={classes.tableCell} sx={{ ...styles.cell, width: '50px' }}>ID</TableCell>
                <TableCell className={classes.tableCell} sx={styles.cell}> Name</TableCell>
                <TableCell className={classes.tableCell} sx={styles.cell}> Phone number</TableCell>
                <TableCell className={classes.tableCell} sx={styles.cell}>Email </TableCell>
                <TableCell className={classes.tableCell} sx={styles.cell}>Hobbies </TableCell>
                <TableCell className={classes.tableCell} sx={{ ...styles.cell, width: '50px' }}></TableCell>
            </TableRow>
        </TableHead>
    )
}

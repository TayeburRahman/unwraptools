import { Avatar, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import "./email.css";




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EmailTable() {

    const [allEmail, setAllEmail] =  useState([]);
    const [csvData, setCsvData] =  useState([]); 

    useEffect(()=>{ 
        axios.get(`https://server.unwraptools.io/api/v1/email/get`)
        .then(res => {
          if (res.status === 200) {
            console.log('sssss',res?.data)
            setAllEmail(res?.data?.response ) 
          }else{
            console.log(res)
          }
        })
      },[])
 
 
 


    return (
         <Box>
            <TableContainer >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow> 
                        <TableCell align="right"> <span className='d-flex-jc-ac '>User</span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'> Email </span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'> Send Time </span></TableCell> 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allEmail?.map((email, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom:"1px solid #bfbfbf"}} 
                        >
                            <TableCell component="th" scope="row">
                               <span className='d-flex-jc-ac'> <Avatar className='me-2' src={email?.image} sx={{width:"40px", height:"40px"}}/> {email?.name} </span>
                            </TableCell>
                            <TableCell align="right"> 
                            <span className='d-flex-jc-ac'> {email?.email} </span>
                            </TableCell>
                            <TableCell align="right"> 
                            <span className='d-flex-jc-ac'>{email?.subscribe_time?.slice(0, 10)}</span>
                            </TableCell> 
                        </TableRow>
                    ))}
                </TableBody>
               
            </Table>
        </TableContainer>
        <Box>
        <CSVLink
        className="button-6 mt-4"
         data={allEmail}
       > Download CSV</CSVLink>  
        </Box>
         </Box>
    );
}
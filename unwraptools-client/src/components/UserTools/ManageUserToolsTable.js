import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import './ManageUserToolsTable.css';
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

export default function ManageUserToolsTable({ slice}) {

    const [allTools, setAllTools] =  useState([]);
    const [ status, setStatus] =  useState(1);

    const { user } = useAuth()
    const email = user?.email

    useEffect(()=>{ 
        axios.get(`https://server.unwraptools.io/api/v1/tool/user/tool/${email}`)
        .then(res => { 
            if(slice){
              setAllTools(res?.data?.tools?.slice(0, 5))
            }else{
              setAllTools(res?.data?.tools)
            } 
        })
      },[status])

 
      const handleApprove = (_id) =>{ 
        axios.put(`https://server.unwraptools.io/api/v1/tool/approveTool/${_id}`)
        .then(res => { 
            setStatus(status === 1? 0:1)  
        }) 
      }
 
      const handleDelete = (_id) =>{
        axios.put(`https://server.unwraptools.io/api/v1/tool/deleteTool/${_id}`)
        .then(res => { 
            setStatus(status === 1? 0:1)  
        }) 
      }
 

 


    return (
        <TableContainer >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell> <span className='d-flex-jc-ac'>Image</span> </TableCell>
                        <TableCell align="right"> <span className='d-flex-jc-ac '>Name</span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'> User Email </span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'> Status </span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'> Update </span></TableCell>
                        <TableCell align="right"> <span className='d-flex-jc-ac'>Delete</span></TableCell>
                        <TableCell align="right"><span className='d-flex-jc-ac'>Details </span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allTools?.map((tool, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom:"1px solid #bfbfbf"}} 
                        >
                            <TableCell component="th" scope="row">
                               <span className='d-flex-jc-ac'>  <img src={tool?.imageURL} width="80px" /> </span>
                            </TableCell>
                            <TableCell align="right"> 
                            <span className='d-flex-jc-ac'> {tool?.tool_name} </span>
                            </TableCell>
                            <TableCell align="right"> 
                            <span className='d-flex-jc-ac'>{tool?.user_email}</span>
                            </TableCell>
                            <TableCell align="right"> 
                            <span className='d-flex-jc-ac'>{tool?.status}</span>
                            </TableCell>
                            <TableCell align="right">
                                <span className='d-flex-jc-ac'> <Link className='linkTDNone' to={`/dashboard/user/update_tools/${tool?._id}`}> <Button 
                                // onClick={e => handleApprove(tool?._id)} 
                                color="success" variant="outlined">Edit</Button></Link></span>
                                
                            </TableCell>

                            <TableCell align="right">
                            <span className='d-flex-jc-ac'> 
                            <Button 
                             onClick={e => handleDelete(tool?._id)} 
                            variant="outlined" 
                            color="error" 
                            sx={{ padding: "5px 5px", minWidth: "5px" }}>
                                    Remove
                                </Button>
                            </span>
                                
                            </TableCell>
                            <TableCell align="right">
                                <span className='d-flex-jc-ac'>
                                <Button variant="outlined" >
                                    <Link to={`/dashboard/tool/${tool?._id}`} style={{width:"100%"}}><VisibilityIcon /></Link>
                                </Button>
                                </span> 
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
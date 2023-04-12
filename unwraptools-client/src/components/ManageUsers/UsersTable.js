import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './UsersTable.css';

const columns = [
  { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Email', label: 'Email', minWidth: 100 },
  {
    id: 'Account Create ',
    label: 'Account Create ',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }, 
  {
    id: 'Details',
    label: 'Details',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(Name, code, Email, size) {
  const Details = Email / size;
  return { Name, code, Email, size, Details };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function UsersTable() {
  const [page, setPage] =  useState(0);
  const [rowsPerPage, setRowsPerPage] =  useState(10);
  const [users, setUsers] =  useState([]);


 useEffect(()=>{

    axios.get(`https://server.unwraptools.io/api/v1/user/getByAllUsers`)
    .then(res => {
       
        setUsers(res?.data)
      
    })

  },[])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', height:"80vh" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, idx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                    
                        <TableCell > 
                          {user?.displayName}
                        </TableCell> 
                        <TableCell > 
                          {user?.email}
                        </TableCell> 
                        
                        <TableCell className='text-right' > 
                        {user?.createdAt?.slice(0,10)}
                        </TableCell> 
                        <TableCell className='text-right'> 
                         <Link className='linkTDNone' to={`/dashboard/user/${user?.email}`}><Button variant="outlined">View</Button></Link>
                        </TableCell> 
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
       className='position-ab'
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
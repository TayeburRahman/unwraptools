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
import useAuth from '../../../Firebase/Hooks/useAuth';
// import './ManageUserNewsTable.css';
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

export default function ManageUserNewsTable({ slice }) {

  const [allNews, setAllNews] = useState([]);
  const [status, setStatus] = useState(1);

  const { user } = useAuth()
  const email = user?.email

  useEffect(() => {
    axios.get(`https://server.unwraptools.io/api/v1/news/user/news/${email}`)
      .then(res => {
        if (slice) {
          setAllNews(res?.data?.news?.slice(0, 5))
        } else {
          setAllNews(res?.data?.news)
        }
      })

      
  }, [status])


  const handleApprove = (_id) => {
    axios.put(`https://server.unwraptools.io/api/v1/news/approvenews/${_id}`)
      .then(res => {
        setStatus(status === 1 ? 0 : 1)
      })
  }

  const handleDelete = (_id) => {
    axios.put(`https://server.unwraptools.io/api/v1/news/deletenews/${_id}`)
      .then(res => {
        setStatus(status === 1 ? 0 : 1)
      })
  }





  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> <span className='d-flex-jc-ac'>Content Link</span> </TableCell>
            <TableCell align="right"> <span className='d-flex-jc-ac '>Title</span></TableCell>
            <TableCell align="right"><span className='d-flex-jc-ac'> Status </span></TableCell>
            <TableCell align="right"><span className='d-flex-jc-ac'> Update </span></TableCell>
            <TableCell align="right"> <span className='d-flex-jc-ac'>Delete</span></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {allNews?.map((news, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: "1px solid #bfbfbf" }}
            >
              <TableCell component="th" scope="row">
                <span className='d-flex-jc-ac'>   {news?.contentLink.slice(0, 40)} </span>
              </TableCell>
              <TableCell align="right">
                <span className='d-flex-jc-ac'> {news?.news_name.slice(0, 30)} </span>
              </TableCell>

              <TableCell align="right">
                <span className='d-flex-jc-ac'>{news?.status}</span>
              </TableCell>
              <TableCell align="right">
                <span className='d-flex-jc-ac'> <Link to={`/dashboard/user/update_news/${news?._id}`} style={{textDecoration:"none"}}> <Button
                  // onClick={e => handleApprove(news?._id)} 
                  color="success" variant="outlined" >Edit</Button></Link></span> 
              </TableCell>

              <TableCell align="right">
                <span className='d-flex-jc-ac'>
                  <Button
                    onClick={e => handleDelete(news?._id)}
                    variant="outlined"
                    color="error"
                    sx={{ padding: "5px 5px", minWidth: "5px" }}>
                    Remove
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
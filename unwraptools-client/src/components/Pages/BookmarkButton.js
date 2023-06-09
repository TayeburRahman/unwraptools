import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function BookmarkButton({ setStatus, status, tool, email }) {

  const [existingUser, setExistingUser] = useState()
  const [message, setMessage] = useState('');

  const [openInfo, setOpenInfo] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://server.unwraptools.io/api/v1/tool/bookmark/existingUser/${tool?._id}/${email}`)
      .then(res => {
        setExistingUser(res.data?.ExistingUser)
      })
  }, [tool, status, email])

  const HandleBookmark = (id) => {

    if (email === undefined) {
      navigate('/login')
      return;
    }

    handleClose()

    axios.put(`https://server.unwraptools.io/api/v1/tool/bookmark/${id}`, { email })
      .then(res => {
        if (res.status === 200) {
          setMessage("Added to favourites")
          handleClickAdded()
          setStatus(status === 1 ? 0 : 1)
        }

        if (res.status === 201) {
          setMessage('Removed from favourites')
          handleClickRemoved()
          setStatus(status === 1 ? 0 : 1)
        }
      })
  }

  const handleClickAdded = () => {
    setOpenSuccess(true);

  };

  const handleClickRemoved = () => {
    setOpenInfo(true);

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenInfo(false);
    setOpenSuccess(false)
    setMessage('')
  };

  return (
    <Fragment>
      <Button size="small" onClick={e => HandleBookmark(tool?._id)} className='BookmarkAddIcon'>
        {!existingUser ? <BookmarkAddIcon /> : <BookmarkAddedIcon />}
      </Button>

      <Snackbar open={openInfo} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
          {message}
        </Alert>
      </Snackbar>
    </Fragment>

  )
}

export default BookmarkButton

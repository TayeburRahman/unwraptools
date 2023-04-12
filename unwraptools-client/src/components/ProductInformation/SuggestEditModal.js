import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, TextField } from '@mui/material';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Firebase/Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'var(--body_background) !important',
  color: 'var(--body_color) !important',
  border: '2px solid var(--border_color) !important',
  boxShadow: 24,
  p: 4,
};


export default function SuggestEditModal({ setOpen, open, tools, setMessage, setOpenSuccess }) {
  const [value, setValue] = useState('')
  const { user } = useAuth()


  const tools_user = tools.user_email

  const handleClose = () => setOpen(false);


  const HandleOnChange = (e) => {
    setValue(e.target.value)
  }


  const HandleOnClick = (e) => {


    axios.post(`https://server.unwraptools.io/api/v1/tool/suggestedit`, {
      tools,
      suggest_user: user,
      tools_user,
      text_suggest: value
    })
      .then(res => {
        setOpenSuccess(true)
        setMessage("Successfully Send Your Suggestion")
        setOpen(false)
      }).catch((err) => {
        console.log('data', err.data)
      })
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container>
              <Grid item>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Propose Modifications
                </Typography>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
            <Box className='mt-2'>
              <Typography>Feel free to contact us if you are associated with the tool and would like to make further changes.</Typography>
            </Box>
            <Box>
              <TextField
                className='mt-4 mb-3 w-100 TextFieldColor'
                id="outlined-multiline-static"
                onChange={HandleOnChange}
                multiline
                rows={5}
                placeholder="Please suggest any edits to the tool's description, pricing or features. Thank you for contributing to the community!"
              />
            </Box>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item xs={6} md={6} lg={6} className='p-2'>
                <Button variant="outlined" className='p-2' color="warning" onClick={handleClose} sx={{ width: "100%" }}>Cancel </Button>
              </Grid>
              <Grid item xs={6} md={6} lg={6} className='p-2'>
                <Button variant="contained" className='p-2 width100' onClick={HandleOnClick}>Submit Tool<SendIcon className=' ps-2' sx={{ marginTop: "-2px !important", fontSize: "25px" }} /></Button>
              </Grid>
            </Grid>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
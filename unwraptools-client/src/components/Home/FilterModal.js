import { Checkbox, Grid } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import * as React from 'react';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: "45%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FilterModal({open, setOpen, pricing, setPricing, setFeatures, features}) {
 
  const handleClose = () => setOpen(false);


  const handelOnChangePricing = (event) => {
    const value = event.target.value;

    const currentIndex = pricing.indexOf(value);
    const newChecked = [...pricing];
    
    console.log("new checked is : ", newChecked)

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    } 
    setPricing(newChecked);
  };


  const handelOnChangeFeatures = (event) => {
    const value = event.target.value;

    const currentIndex = features.indexOf(value);
    const newChecked = [...features];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    } 
    setFeatures(newChecked);
  };

  return (
    <div> 
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Box>
          <Typography p={0} m={0}>Pricing</Typography>
             <Grid container>
 
              <Grid item  xs={12} md={6} lg={6}>
              <Typography p={0} m={0} >
              {" "}
              <Checkbox
                value="Free"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
              Free{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Free Trial"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
              Free Trial{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Contact For Pricing"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
              Contact for Pricing{" "}
            </Typography>
              </Grid>

              <Grid item  xs={12} md={6} lg={6}>
              
            <Typography>
              {" "}
              <Checkbox
                value="Freemium"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
              Freemium{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Paid"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
              Paid{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Deals"
                onChange={handelOnChangePricing}
                {...label}
              />{" "}
             Deals{" "}
            </Typography>
              </Grid>

             </Grid>

             <Typography p={0} m={0}>Features</Typography>
             <Grid container>
               
              <Grid item xs={12} md={6} lg={6}>
              <Typography p={0} m={0}>
              {" "}
              <Checkbox
                value="waitlist"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
             Waitlist{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Mobile App"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
              Mobile App{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="API"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
              API{" "}
            </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
              
            <Typography>
              {" "}
              <Checkbox
                value="Browser Extension"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
              Browser Extension{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Open Source"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
              Open Source{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="Discord Community"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
             Discord Community{" "}
            </Typography>
            <Typography>
              {" "}
              <Checkbox
                value="No Signup Required"
                onChange={handelOnChangeFeatures}
                {...label}
              />{" "}
            No Signup Required{" "}
            </Typography>
              </Grid>

             </Grid>
          </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
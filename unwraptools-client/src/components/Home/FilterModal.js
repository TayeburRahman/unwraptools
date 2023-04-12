import { Checkbox, Grid } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


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
  bgcolor: 'var(--body_background) !important',
  border: '2px solid #1185bb !important',
  boxShadow: 24,
  color: "var(--body_color) !important",
  p: 4,
  borderRadius: "5px"
};

export default function FilterModal({ open, setOpen, pricing, setPricing, setFeatures, features }) {

  const [checkedFree, setCheckedFree] = useState(false)
  const [checkedFreeTrial, setCheckedFreeTrial] = useState(false)
  const [checkedContent, setCheckedContact] = useState(false)
  const [checkedFreemium, setCheckedFreemium] = useState(false)
  const [checkedPaid, setCheckedPaid] = useState(false)
  const [checkedDeals, setCheckedDeals] = useState(false)

  const [waitlist, setCheckedWaitlist] = useState(false)
  const [app, setCheckedApp] = useState(false)
  const [api, setCheckedApi] = useState(false)
  const [browser, setCheckedBrowser] = useState(false)
  const [source, setCheckedOpen] = useState(false)
  const [discord, setCheckedDiscord] = useState(false)
  const [signup, setCheckedSignup] = useState(false)




  const handleClose = () => setOpen(false);


  const handelOnChangePricing = (event) => {
    if (event?.target?.value === "free") {
      setCheckedFree(checkedFree === true ? false : true)
    }
    if (event.target.value === "free_trial") {
      setCheckedFreeTrial(checkedFreeTrial === true ? false : true)
    }
    if (event.target.value === "contact_for_pricing") {
      setCheckedContact(checkedContent === true ? false : true)
    }
    if (event.target.value === "freemium") {
      setCheckedFreemium(checkedFreemium === true ? false : true)
    }
    if (event.target.value === "paid") {
      setCheckedPaid(checkedPaid === true ? false : true)
    }
    if (event.target.value === "deals") {
      setCheckedDeals(checkedDeals === true ? false : true)
    }


    const value = event.target.value;
    const currentIndex = pricing.indexOf(value);
    const newChecked = [...pricing];



    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setPricing(newChecked);
  };


  const handelOnChangeFeatures = (event) => {

    if (event?.target?.value === "waitlist") {
      setCheckedWaitlist(waitlist === true ? false : true)
    }
    if (event.target.value === "mobile_app") {
      setCheckedApp(app === true ? false : true)
    }
    if (event.target.value === "api") {
      setCheckedApi(api === true ? false : true)
    }
    if (event.target.value === "browser_extension") {
      setCheckedBrowser(browser === true ? false : true)
    }
    if (event.target.value === "open_source") {
      setCheckedOpen(source === true ? false : true)
    }
    if (event.target.value === "discord_community") {
      setCheckedDiscord(discord === true ? false : true)
    }
    if (event.target.value === "no_signup_required") {
      setCheckedSignup(signup === true ? false : true)
    }


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

                <Grid item xs={12} md={6} lg={6}>
                  <Typography p={0} m={0} >
                    {" "}
                    <Checkbox className="chackbox"
                      value="free"
                      checked={checkedFree}
                      onChange={handelOnChangePricing}
                      {...label}
                    />{" "}
                    Free{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="free_trial"
                      checked={checkedFreeTrial}
                      onChange={handelOnChangePricing}
                      {...label}
                    />{" "}
                    Free Trial{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="contact_for_pricing"
                      checked={checkedContent}
                      onChange={handelOnChangePricing}
                      {...label}
                    />{" "}
                    Contact for Pricing{" "}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>

                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="freemium"
                      checked={checkedFreemium}
                      onChange={handelOnChangePricing}
                      {...label}
                    />{" "}
                    Freemium{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="paid"
                      checked={checkedPaid}
                      onChange={handelOnChangePricing}
                      {...label}
                    />{" "}
                    Paid{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="deals"
                      checked={checkedDeals}
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
                    <Checkbox className="chackbox"
                      value="waitlist"
                      checked={waitlist}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    Waitlist{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="mobile_app"
                      checked={app}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    Mobile App{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="api"
                      checked={api}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    API{" "}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>

                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="browser_extension"
                      checked={browser}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    Browser Extension{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="open_source"
                      checked={source}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    Open Source{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="discord_community"
                      checked={discord}
                      onChange={handelOnChangeFeatures}
                      {...label}
                    />{" "}
                    Discord Community{" "}
                  </Typography>
                  <Typography>
                    {" "}
                    <Checkbox className="chackbox"
                      value="no_signup_required"
                      checked={signup}
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
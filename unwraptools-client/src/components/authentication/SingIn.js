import { Button, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import google from '../../image/google.png';
import './auth.css';

 



const SignIn = () => {  
    const [select, setSelect] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); 
    const { signImWithGoogle} = useAuth();

    const handelGoogleSignIn = (e) => {
        signImWithGoogle(location, navigate)
      };
 

    return (
        <Fragment>
            <div className="account-pages w-d-100 background">
                <div className="container w-d-100">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-7">
                            <div className="card">
                                <div
                                    className="card-header logo_background text-center" >
                                    <Link
                                        to="/"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            marginLeft: "50px"
                                        }}
                                        className="revert LogoNav"

                                    > 
                                        <span className='textBeg revert'>unwraptools</span>
                                    </Link>
                                </div>

                                <div className="card-body">
                                    <div className="text-center w-75 m-auto">
                                        <Typography className='revert' gutterBottom variant="h4" component="div">
                                            Sing In
                                        </Typography>
                                        <p className="" >
                                            Please sign up or login to view your unwraptools AI tools and posts.
                                        </p>
                                    </div>
                                    <div className='marginRe'>
                                        <div className='login-button'><Button className='w-100' onClick={handelGoogleSignIn}><span className='padding2'><img src={google} width="30px" /> SIGN WITH GOOGLE</span></Button></div>
                                    </div>
                                    <div className='mt-4'>
                                        <p>These are the tools and posts you have favourited. You can remove them from your favourites by clicking the bookmark icon.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">
                                        Don't want to sign in now?{' '}
                                        <Link
                                            to="/"
                                            className="text-muted ms-1"
                                        >
                                            <b>Back Home</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            {/* {
                                error && (
                                    <Alert severity="error">
                                        <AlertTitle>
                                            <Typography pt={0.50} variant="body2" gutterBottom>
                                                <strong>Check</strong> - {error ? error : ''}
                                            </Typography>
                                        </AlertTitle>
                                    </Alert>
                                )
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignIn;

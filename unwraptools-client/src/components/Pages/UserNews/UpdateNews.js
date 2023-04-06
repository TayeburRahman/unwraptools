import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
 

const UpdateNews = () => {
    const [news, setNews] =  useState([]); 
    const [newsName, setNewsName] =  useState();
    const [ShortDescription, setShortDescription] =  useState();
    const [StartingPrice, setStartingPrice] =  useState();
    const [ImageURL, setImageURL] =  useState();
    const {newsId} = useParams()
    const navigator = useNavigate()

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
 
    const onSubmit = async (data) => { 
        const {news_names, contentLinks} = data 
        axios.put(`http://localhost:5000/api/v1/news/updateNews/${newsId}`,{
            news_name: !news_names? news?.news_name : news_names,
            contentLink:  !contentLinks? news?.contentLink : contentLinks, 
        })
        .then(res => {
          if (res.status === 200) { 
            alert("Your Tool Successfully Update")
            navigator('/dashboard/user/manage_news')
          }else{
            console.log(res)
          }
        }) 
        
    };
 


    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/news/getNews/${newsId}`)
        .then(res => {
          if (res.status === 200) { 
            setNews(res.data.news) 
          }else{
            console.log(res)
          }
        }) 
    },[])


console.log(news)

    return (
        <Fragment>
            <Box className="main-page">
                <Box className="container-fluid">
                    <div className="page-title-div">
                        <Typography className="title text-left" variant="h5" gutterBottom >Update News: {news?.news_name}</Typography>
                    </div>
                </Box>
                <Box className=''>
                </Box>
                <Box>
                <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="card "> 
                                <div className="card-body mt-4"> 
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="displayName"
                                                className="form-label custom-w-150"
                                            >
                                                News Title :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="text"
                                                id="displayName"
                                                onSelect={e=> {setNewsName(e.target.value)}}
                                               
                                                defaultValue={news?.news_name}
                                                {...register('news_names')}
                                            />
                                        </div>

                                       
                                        
                                        <div className="  text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Content Link:
                                            </label>
                                            <textarea
                                                className="form-control p-2"
                                                type="text"
                                                id="student_roll"
                                                defaultValue={news?.contentLink}
                                                onSelect={e=> {setImageURL(e.target.value)}}
                                                
                                                {...register('contentLinks')}
                                            />
                                        </div> 
 
                                         <div className=" mb-0 mt-2 text-center">
                                            <button
                                                className="btn mt-4 btn-primary form-control"
                                                type="submit"
                                                style={{
                                                    background: '#1560FF',
                                                }} 
                                            >
                                              Update News
                                            </button>
                                        </div>


                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
                </Box>
            </Box>
        </Fragment>
    );
};

export default UpdateNews;
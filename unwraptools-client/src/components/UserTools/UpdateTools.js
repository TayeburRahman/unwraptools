import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import './ManageUserToolsTable';

const UpdateTools = () => {
    const [tools, setTools] =  useState([]);
    const [description, setDescription] =  useState();
    const [ToolsName, setToolsName] =  useState();
    const [ShortDescription, setShortDescription] =  useState();
    const [StartingPrice, setStartingPrice] =  useState();
    const [ImageURL, setImageURL] =  useState();
    const {toolsId} = useParams()
    const navigator = useNavigate()

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
 
    const onSubmit = async (data) => {

        const {tool_names, short_descriptions, startingPrices, imageURLs} = data
  
        if(data.tool_name){
            setToolsName(data.tool_name)
        }
 
        axios.put(`http://localhost:5000/api/v1/tool/updateTools/${toolsId}`,{
            short_description: !short_descriptions? tools?.short_description : short_descriptions,
            tool_name:  !tool_names? tools?.tool_name : tool_names,
            startingPrice: !startingPrices? tools?.startingPrice : startingPrices,
            imageURL: !imageURLs? tools?.imageURL : imageURLs , 
            description: description, 
        })
        .then(res => {
          if (res.status === 200) { 

            console.log("req",res.data)
            alert("Your Tool Successfully Update")
            navigator('/dashboard/user/manage_tools')
          }else{
            console.log(res)
          }
        }) 
        
    };
 


    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/tool/getTools/${toolsId}`)
        .then(res => {
          if (res.status === 200) { 
            setTools(res.data.tools) 
          }else{
            console.log(res)
          }
        }) 
    },[])


console.log(tools)

    return (
        <Fragment>
            <Box className="main-page">
                <Box className="container-fluid">
                    <div className="page-title-div">
                        <Typography className="title text-left" variant="h5" gutterBottom >Update Tools: {tools?.tool_name}</Typography>
                    </div>
                </Box>
                <Box className=''>
                </Box>
                <Box>
                <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="card cardCustom"> 
                                <div className="card-body "> 
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="displayName"
                                                className="form-label custom-w-150"
                                            >
                                                Tool Name :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="text"
                                                id="displayName"
                                                onSelect={e=> {setToolsName(e.target.value)}}
                                               
                                                defaultValue={tools?.tool_name}
                                                {...register('tool_names')}
                                            />
                                        </div>

                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Short Descript :
                                            </label>
                                            <textarea
                                                className="form-control p-2"
                                                type="email"
                                                id="email"
                                                onSelect={e=> {setShortDescription(e.target.value)}}
                                                defaultValue={tools?.short_description}
                                                {...register('short_descriptions')}
                                            />
                                        </div>
                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Starting Price :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="number"
                                                id="student_roll"
                                                defaultValue={tools?.startingPrice}
                                                onSelect={e=> {setStartingPrice(e.target.value)}} 
                                                {...register('startingPrices')}
                                            />
                                        </div> 
                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Image URL:
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="text"
                                                id="student_roll"
                                                defaultValue={tools?.imageURL}
                                                onSelect={e=> {setImageURL(e.target.value)}}
                                                
                                                {...register('imageURLs')}
                                            />
                                        </div> 

                                      
                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Department :
                                            </label> 
                                            <ReactQuill theme="snow" className='w-100' style={{ height: "200px" }} value={description? description: tools?.description} onChange={setDescription} />
                                         </div> 

                                         <div className=" mb-0 mt-5 text-center">
                                            <button
                                                className="btn mt-4 btn-primary form-control"
                                                type="submit"
                                                style={{
                                                    background: '#1560FF',
                                                }}
                                                // disabled={isLoading}
                                            >
                                              Update Tools
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

export default UpdateTools;
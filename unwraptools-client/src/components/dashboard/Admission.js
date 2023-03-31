import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import './StudentsAdmission.css';

const StudentsAdmission = () => {

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {await console.log(data);};


    return (
        <Fragment>
            <Box className="main-page">
                <Box className="container-fluid">
                    <div className="page-title-div">
                        <Typography className="title text-left" variant="h5" gutterBottom >Student Admission </Typography>
                    </div>
                </Box>
                <Box className=''>
                </Box>
                <Box>
                <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="card"> 
                                <div className="card-body "> 
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="displayName"
                                                className="form-label custom-w-150"
                                            >
                                                Full Name :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="text"
                                                id="displayName"
                                                placeholder="Enter Student name"
                                                {...register('student_name', {
                                                    required:
                                                        'Name is required',
                                                })}
                                            />
                                        </div>

                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Email address :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="email"
                                                id="email"
                                                placeholder="Enter Student email"
                                                {...register('student_email', {
                                                    required:
                                                        'Email is required',
                                                })}
                                            />
                                        </div>
                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Roll Id :
                                            </label>
                                            <input
                                                className="form-control p-2"
                                                type="number"
                                                id="student_roll"
                                                placeholder="Enter your email"
                                                {...register('student_roll', {
                                                    required:
                                                        'Email is required',
                                                })}
                                            />
                                        </div>

                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Gender :
                                            </label> 
                                            <select className='form-control p-2' {...register("student_gender")}>
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                                <option value="other">other</option>
                                              </select>
                                        </div>

                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                DOB :
                                            </label> 
                                            <input
                                            className="form-control p-2"
                                              type="date"
                                              {...register("date_of_barth", {
                                                valueAsDate: true,
                                              })}
                                            />
                                         </div>

                                        <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Department :
                                            </label> 
                                            <Controller
                                              className="form-control w-100"
                                              name="student_department"
                                              control={control}
                                              render={({ field }) => <Select 
                                                {...field} 
                                                options={[
                                                  { value: "cse", label: "Computer Science and Engineering" },
                                                  { value: "eee", label: "Electrical and Electronics Engineering" },
                                                  { value: "bba", label: "Bachelor of Business Administration" },
                                                  { value: "civil", label: "Civil" }
                                                ]} 
                                              />}
                                            />
                                         </div> 

                                         <div className=" mb-0 text-center">
                                            <button
                                                className="btn btn-primary form-control"
                                                type="submit"
                                                style={{
                                                    background: '#1560FF',
                                                }}
                                                // disabled={isLoading}
                                            >
                                              Admission Submit
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

export default StudentsAdmission;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React, { useEffect, useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const steps = ['Startup Details', 'Additional Details'];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [tool_name, setToolName] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [imageURL, setImageURL] = useState(''); 
   
  const [short_description, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [disable, setDisable] = useState(true);

 
 console.log(tool_name)

useEffect(()=>{
  if( websiteURL.length === 0 || imageURL.length === 0){
    setDisable(true)
  }else{
    setDisable(false)
  }
},[tool_name,websiteURL ])

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className='p-4 Paper'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step className='background' key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>

        <React.Fragment>

          {
            activeStep === 0 && (
              <Box sx={{ mt: 2, mb: 1 }}>
                <StepOne
                  setToolName={setToolName}
                  description={description}
                  setWebsiteURL={setWebsiteURL}
                  setShortDescription={setShortDescription}
                  setDescription={setDescription}
                  setImageURL={setImageURL}
                />
              </Box>
            )
          }

          {
            activeStep === 1 && (
              <StepTwo
              tool_name={tool_name}
              websiteURL={websiteURL}
              short_description={short_description}
              description={description} 
              imageURL={imageURL}
              />
            )
          }
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep && 1 ? (
              ''
            ) : (
              <Button variant="contained" disabled={disable} onClick={handleNext}>
                {activeStep === steps.length === 1 ? 'Finish' : 'Next'}
              </Button>
            )
            }

          </Box>
        </React.Fragment>
      </Box>
    </Box>
  )
}
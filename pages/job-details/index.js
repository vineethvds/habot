import React from 'react';
import style from './job-details.module.css'
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import JobDetailsForm from '../../components/JobDetailsForm/index'
import JobReview from '../../components/JobReview/index'
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  // const step1Content = <JobDetailsForm />;
  // const step2Content = <JobReview />;
  // const step3Content = <h1></h1>;

  // // setup step validators, will be called before proceeding to the next step
  // function step2Validator() {
  //   return true;
  // }

  // function step3Validator() {
  //   // return a boolean
  // }

  return (
    <div>

      <div className={style.jobDetailsHeader}>
        <h1>Give details of the job</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h2>
      </div>
      {/* <div className={style.stepProgress}>
        <StepProgressBar
          stepClass={style.progress}
          startingStep={0}
          steps={[
            {
              label: "Job Details",
              name: "Job Details",
              content: step1Content
            },
            {
              label: "Image-processing",
              name: "Image Processing",
              content: step2Content,
              validator: step2Validator
            },
            {
              label: "Finish",
              name: "Finish",
              content: step3Content
            }
          ]}
        />
      </div> */}
      <img className='mx-auto' src="https://i.ibb.co/pzFQYSx/Group-7074.png" alt="" />
      <JobDetailsForm />
      <div className='text-center'>
        <Link href='./job-review'>
          <button className={style.proceedBtn}>Proceed</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
import React from 'react';
import style from './jobReview.module.css'
import JobReview from '../../components/JobReview/index'
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <div className={style.jobDetailsHeader}>
        <h1>Review Page</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h2>
      </div>

      <img className='mx-auto' src="https://i.ibb.co/R0VphFb/Group-7072.png" alt="" />
      <JobReview />
      <div className={`${style.backBtnBox}`}>
        <Link href='./job-details'>
          <div className={` ${style.backBtn}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 22L0 12L10 2L11.4 3.425L2.825 12L11.4 20.575L10 22Z" fill="black" />
            </svg>
            <h1>Back to previous page</h1>
          </div>
        </Link>
        <Link href='./job-post-success'>
          <button className={style.proceedBtn}>Pay & Post Job</button>
        </Link>
      </div>

    </div>
  );
};

export default index;
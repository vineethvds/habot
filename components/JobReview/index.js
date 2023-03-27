import React from 'react';
import style from './JobReview.module.css'

const index = () => {
  return (
    <div>
      <div className={style.JobReviewContainer}>
        <h1>Job Headline Demo</h1>
        <div className={`d-flex justify-between  sm:w-2/4 mt-5 `}>
          <div className={style.JobReviewDetails}>
            <h1>Job Categorry</h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={style.JobReviewDetails}>
            <h1>Job Categorry</h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className={`mt-5 ${style.JobReviewDetails}`}>
          <h1>Job  Description</h1>
          <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem lorem IpsumLorem IpsumLorem IpsumLorem lorem IpsumLorem IpsumLorem ipsum lorem Lorem Ipsum Lorem IpsumLorem IpsumLorem lorem IpsumLorem IpsumLorem IpsumLorem lorem IpsumLorem IpsumLorem ipsum lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, possimus assumenda? Soluta natus odit consequuntur mollitia quod? Architecto voluptas sint rem dolorem maxime repudiandae eligendi, suscipit cumque quidem ab pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem ad facere eveniet, ea numquam aliquam pariatur hic repellendus aliquid tempora fuga quod obcaecati architecto placeat facilis tempore eaque beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a, obcaecati saepe labore, placeat neque omnis quisquam natus dignissimos blanditiis veniam explicabo praesentium, voluptatem voluptate totam ab quidem maiores ducimus? </p>
        </div>
      </div>
    </div>
  );
};

export default index;
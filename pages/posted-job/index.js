import React from 'react';
import BasicExample from '../../components/Table'
import style from './postedjob.module.css'

const index = () => {
  return (
    <div className="container">
<h1 className={style.title}>Posted Job</h1>
<a href='' className={style.backBtn}>back</a>
      <BasicExample />
    </div>
  );
};

export default index;
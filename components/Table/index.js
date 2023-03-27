import React from 'react'
import style from './index.module.css'
import tableRecord from "./record.json"

function JsonDataDisplay(){
  const DisplayData=tableRecord.map(
      (info)=>{
          return(
              <tr>
                  <td align='center' className={style.tableTh}>{info['Job Title']}</td>
                  <td align='center' className={style.tableTh}>{info['Job Category']}</td>
                  <td align='center' className={style.tableTh}>{info['Job Posted Date']}</td>
                  <td align='center' className={style.tableTh}>{info.Description}</td>
                  <td align='center' className={style.tableTh}>{info['Emirates Name']}</td>
              </tr>
          )
      }
  )

return(
  <div className="container">
  <div className={style.postedJob}>
          <table className={style.jobTitle}>
              <thead className={style.headerColor}>
                  <tr>
                  <th align='center' className={style.tableTh}>Job Title</th>
                  <th align='center' className={style.tableTh}>Job Category</th>
                  <th align='center' className={style.tableTh}>Job Posted Date</th>
                  <th align='center' className={style.tableTh}>Description</th>
                  <th align='center' className={style.tableTh}>Emirates Name</th>
                  </tr>
              </thead>
              <tbody>
                  {DisplayData}     
              </tbody>
          </table>
           
      </div>
  </div>
    
  )
}

export default JsonDataDisplay;
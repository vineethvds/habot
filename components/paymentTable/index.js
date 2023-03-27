import React from 'react'
import style from './index.module.css'
import tableRecord from "./payment.json"

function JsonDataDisplay(){
  const DisplayData=tableRecord.map(
      (info)=>{
          return(
              <tr>
                  <td align='center' className={style.tableTh}>{info.ID}</td>
                  <td align='center' className={style.tableTh}>{info.Date}</td>
                  <td align='center' className={style.tableTh}>{info['Job Title']}</td>
                  <td align='center' className={style.tableTh}>{info.Payment}</td>
                  <td align='center' className={style.tableTh}>{info['Payment Status']}</td>
              </tr>
          )
      }
  )

return(
  <div className="container">
  <div className={style.postedJob}>
    <table>
        
    </table>
          <table className={style.jobTitle}>
              <thead className={style.headerColor}>
                  <tr>
                  <th align='center' className={style.tableTh}>ID</th>
                  <th align='center' className={style.tableTh}>Date</th>
                  <th align='center' className={style.tableTh}>Job Title</th>
                  <th align='center' className={style.tableTh}>Payment</th>
                  <th align='center' className={style.tableTh}>Payment Status</th>
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
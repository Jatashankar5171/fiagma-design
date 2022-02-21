import React from 'react'
import TableContent from './TableContent'

const Table = (props) => {

    const data = props.data
    console.log("test:",data)

  return (<>
  
  <div className='TABLE_CONTAINER'>
      <div className='TABLE_TAB'>
        <p className='UNDERLINED_HEADING'>First Tab</p>
        <p >Second Tab</p>
      </div>
      <div className='TABLE_HEADER'>
        <p>Wallet</p>
        <p>Amout</p>
        <p>User Account</p>
        <p>Refferal Earning</p>
      </div>
      <div className='TABLE_BODY'>
        {
          data===null?"wait":data.map((cur)=>{
            return <TableContent data={cur}/>
          })
        }
      </div>
  </div>
  
  </>)
}

export default Table
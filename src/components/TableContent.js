import React from 'react'
import './TableContent.css'

const TableContent = (props) => {
    const sstate = {
        img:'img',
        amount:0.001,
        asset:'Bitcoin',
        chain:{
            img:'img',
            name:'AVAX'
        },
        referral_earnings:0.001,
        state: 'expired',
        type:'put',
        user:'0xdf..78pcd',
    }
    const state = props.data
  return (
    <>
    
    <div className='TableData'>
        <div className='ColumnOne'>
           <div className='COO'>
                <img src={state.img}/>
           </div>
           <div className='COT'>
               <div className='COTO'>
                <h1 >{state.asset}</h1>
               </div>
               <div className='COTT'>
                <h2>{state.type}</h2>
                <div className='final'>
                    <img src={state.chain.img} />
                    <h2>{state.chain.name}</h2>
                </div>
               </div>
           </div>
        </div>
        <div className='ColumnTwo'>
            <h1>{state.amount}BNB</h1>
            <h2>{state.state}</h2>
        </div>
        <div className='ColumnThree'>
            <h1>{state.user}</h1>
        </div>
        <div className='ColumnFour'>
            <h1>{state.referral_earnings}BNB</h1>
            <h2>view on Scan</h2>
        </div>
    </div>
    
    </>
  )
}

export default TableContent
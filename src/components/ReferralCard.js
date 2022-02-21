import React from 'react'

const ReferralCard = () => {
  return (
    <>
         <div className='REFERRAL_CARD'>
            <div className='REFERRAL_DETAILS'>
              <img src='./dollar.png' className='IMAGE_ICON'/>
              <label className='LARGE_FONT WHITE_FONT'>12.5% of fee</label>
            </div>
            <label className='MEDIUM_FONT DARK_FONT'>Your refferal link for xyz</label>
            <div className='REFERRAL_LINK'>
              <label className='SMALL_FONT WHITE_FONT'>refferalLink</label>
              <button className='ABSTRACT_BUTTON'></button>
            </div>
          </div>
    </>
  )
}

export default ReferralCard
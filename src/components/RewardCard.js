import React from 'react'

const RewardCard = () => {
  return (
    <>
        <div className='REWARD_CARD'>
            <div className='REWARD_DETAILS'>
                <label className='MEDIUM_FONT WHITE_FONT'>your rewards</label>
                <label className='LARGE_FONT WHITE_FONT'>$ 0.21200018</label>
                <div className='REWARD_COINS'>
                    <label className='EXTRA_SMALL_FONT WHITE_FONT'>$ 40 AVAX</label>
                    <label className='EXTRA_SMALL_FONT WHITE_FONT'>$ 20 ETHM</label>
                    <label className='EXTRA_SMALL_FONT WHITE_FONT'>$ 50 BTC</label>
                </div>
            </div>
            <button className='CUSTOM_LINK_BUTTON'>custom link</button>
          </div>
    </>
  )
}

export default RewardCard
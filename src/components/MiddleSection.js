import React from 'react'

import ReferralCard from './ReferralCard';
import RewardCard from './RewardCard';
import Tutorial from './Tutorial';
import Table from './Table';

const MiddleSection = (props) => {
  return (<>
  
  <div className='MIDDLE_SECTION_CONTAINER'>
    <div className='SECTION_HEADING'>
        <p className='MEDIUM_FONT UNDERLINED_HEADING'>{props.state}</p>
        <div className='SECTION_HEADING_DETAILS'>
        <p>💌</p>
        <p>0.2$ xyz</p>
        <p className='TIER'>Tier1</p>
        </div>
    </div>
    <Tutorial/>
    <RewardCard/>
    <div className='REFERRAL_SECTION'>
        <ReferralCard/>
        <ReferralCard/>
    </div>
    <Table data={props.data}/>
    </div>
  
  </>)
}

export default MiddleSection
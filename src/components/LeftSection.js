import React from 'react'

const LeftSection = (props) => {

    const triggerEvent = (payload) =>{
        props.triggerEvent({type:'ui',payload:payload})
    }

  return (<>

    <div className='LEFT_SECTION_CONTAINER'>
        <div className='LEFT_SECTION_TOP'>
        <div className='LEFT_SECTION_ACCOUNT'>
           <h1 className='ROUND24PIXEL'>N</h1>
           <h1>Name</h1>
        </div>
        <div className='LEFT_SECTION_HEADING'>
            <h2 onClick={()=>triggerEvent('section 1')} className='MEDIUM_FONT DARK_FONT' defaultValue='SECTION 1'>📃  SECTION 1</h2>
            <h2 onClick={()=>triggerEvent('section 2')} className='MEDIUM_FONT DARK_FONT'>📅  SECTION 2</h2>
            <h2 onClick={()=>triggerEvent('section 3')} className='MEDIUM_FONT DARK_FONT'>💌  SECTION 3</h2>
            <h2 onClick={()=>triggerEvent('section 4')} className='MEDIUM_FONT DARK_FONT'>💫  SECTION 4</h2>
            <h2 onClick={()=>triggerEvent('section 5')} className='MEDIUM_FONT DARK_FONT'>💤  SECTION 5</h2>
        </div>
        </div>
        <div className='LEFT_SECTION_BOTTOM'>
            <div className='LEFT_SECTION_BUY_SELL'>
                <p className='DARK_ROUND_BACKGROUND'>💌$0.80</p>
                <p className='DARK_ROUND_BACKGROUND'>BUY$0.9</p>
            </div>
            <div className='LEFT_SECTION_UIBUTTONS'>
                <button className='WORLD_BUTTON'>🌐</button>
                <div className='TOGGLE_BUTTON'>
        
                </div>
            </div>
        </div>
    </div>

    </>)
}

export default LeftSection
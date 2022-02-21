import React from 'react'

const RightSection = () => {
  return (<>
  
    <div className='RIGHT_SECTION_CONTAINER'>
        <div className='RIGHT_SECTION_DROPDOWN'>
            <select className='DROPDOWN' name="coin">
                <option className='DROPDOWN_OPTION' value="Avalance">💛Avalance</option>
                <option className='DROPDOWN_OPTION' value="Bitcoin">💙Bitcoin</option>
                <option className='DROPDOWN_OPTION' value="Etherium">💚Etherium</option>
            </select>
            <select className='DROPDOWN' name="Wallet">
                <option value="Avalance">🔰oxf098</option>
                <option value="Bitcoin">🔰oxf028</option>
                <option value="Etherium">🔰oxf058</option>
            </select>
        </div>
        <div className='RIGHT_SECTION_CUSTOM_LINK'>
            <h1>◀ Custom Link</h1>
            <p >https://crypto/currency/links</p>
            <input placeholder='Enter' className='DARK_INPUT_FIELD'/>
            <div className='RIGHT_SECTION_BUTTONS'>
                <button className='CUSTOM_LINK_BUTTON'>🔗Custom-Link</button>
                <button className='CANCEL_BUTTON'>◀ Cancel</button>
            </div>
        </div>
    </div>
  
  </>)
}

export default RightSection
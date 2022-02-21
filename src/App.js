
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import MiddleSection from './components/MiddleSection';
import Header from './components/Header';
import uiReducer from './reducers/uiReducer';
import { useEffect, useReducer, useState } from 'react';

function App() {
  const url = 'https://raw.githubusercontent.com/akshita151199/APIs/main/data'
  const [state,dispatch] = useReducer(uiReducer,'Section 1')
  const triggerEvent = (action) =>{
    dispatch(action)
  }
  const [apiData,setApiData] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      setApiData(data.data)
    })
  },[url])
  return (
    <div className="App">
      <Header/>
      <div className='APP_SECTION'>
        <div className='LEFT_SECTION'>
          <LeftSection state={state} triggerEvent={triggerEvent}/>
        </div>
        <div className='MIDDLE_SECTION'>
          <MiddleSection data = {apiData}state={state} triggerEvent={triggerEvent}/>
        </div>
        <div className='RIGHT_SECTION'>
          <RightSection state={state} triggerEvent={triggerEvent}/>
        </div>
      </div>
    </div>
  );
}

export default App;

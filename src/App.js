import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
// import * as ReactDOMClient from 'react-dom/client';
// ReactDOMClient.createRoot(/*...*/);
// ReactDOMClient.hydrateRoot(/*...*/);

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(){
  const[mode,setMode] = useState('dark');
  // Whether Dark Mode is Enabled or not.
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
        setAlert(null);
    },3000);
  }
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('text-light');
    document.body.classList.remove('text-dark');
  }
  
  const toggleMode = (cls)=>{
    removeBodyClasses ();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(cls === 'dark' || cls === 'primary' || cls === 'danger' || cls === 'success') {
      document.body.classList.add('text-light');
      setMode('light');
    } else if(cls === 'light' || cls === 'warning') {
      document.body.classList.add('text-dark');
      setMode('dark');
    }
  }
      // document.title = 'Textutils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
   
  return(
    <> 
    {/* <Navbar/> */}
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className ="container my-3">
      <Routes>
            {/* /users --> Component 1
            /users/home --> Component 2 */}
             {/* <Route exact path="/about">
            <About mode={mode}/> */}
            {/* <Route exact path="/">
            <TextForm showAlert={showAlert} heading = " Enter the text to Analyse Below " mode={mode}/> */}
              <Route exact path="/about" element ={<About />}/> 
              <Route exact path="/" element ={<TextForm showAlert={showAlert} heading = "Try Textutils - Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    {/* <About/>  */}
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import About from './Components/About';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App(){
  const[mode,setMode] = useState('light');
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
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been Enabled","success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    }
    else{
      setMode('light');                      
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been Enabled","success");
      document.title = 'Textutils - Light Mode';

    }
  }

  return(
    <> 
    {/* <Navbar/> */}
    <Router>
      <Navbar title = " TextUtils " mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>
      <div className = "container my-3">
      <Switch>
       {/* /users --> Component 1
        /users/home --> Component 2 */}

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = " Enter the text to Analyse Below " mode={mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    {/* <About/>  */}
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; : we don't need those page and we'll not call them 
// import Hello from './Hello' : we don't need those page and we'll not call them
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import AppFather from './AppFather';

/*
ReactDOM.render(
  <React.StrictMode>
   <Hello greeting={ 'whatsapp Ninja' + 27}/>  /the name Should always start with capital letter as here in : Hello
  </React.StrictMode>,
  document.getElementById('root')
);*/

//the previous code was only demostrative on how I can call Hello.js page and Hello.css page you can check them to see how we change and how we call them 

/*
ReactDOM.render(
  <React.StrictMode>
    <div >
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> 
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>  
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> 
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);
*/
//the previous code was so much repetitive so if I have 50 element i have to copy past and change the nbr 50 times that's why we will do something faster : 



ReactDOM.render(
  <React.StrictMode>
    
  <AppFather />

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

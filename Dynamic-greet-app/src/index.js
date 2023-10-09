import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
let d = new Date();
let hr = d.getHours();
let greet = "";
let color = {
};


if(hr>=1 && hr<12){
greet = "Good Morning";
color = "green";
}else if(hr>=12 && hr<18){
  greet = "Good Evening";
  color = "red";
}else{
  greet = "Good Afternoon";
  color = "grey";
}
ReactDom.render(
  <React.Fragment>
    <h2 style={{color}}>{`Hello sir, ${greet}`}</h2>
  </React.Fragment>,
  document.getElementById("root")
);
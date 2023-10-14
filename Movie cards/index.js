import React from 'react';
import ReactDom from 'react-dom';
import Para from './Para';
import Css from './index.css';




ReactDom.render(
  <React.Fragment>
        <h1>Netflex movies props in REACT-JS</h1>

    <Para 
    imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiUHLJxxvotiztWUAJmR8_Uay82w0DT0sxg&usqp=CAU"
    heading = "A caring movie"
    name = "FATHERHOOD"/>
    <Para
    imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91UbivRxPcBcmD4ZrFZwO3-Ns39ExYZircg&usqp=CAU"
    heading = "A entertaint movie"
    name= "LUDO"/>
    <Para 
    imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_hPjonGzrpSPidA8ebLMsNATHOlmJefqGQ&usqp=CAU"
    heading = "A horror movie"
    name = "DARK"/>
  </React.Fragment>,
  document.getElementById("root")
);


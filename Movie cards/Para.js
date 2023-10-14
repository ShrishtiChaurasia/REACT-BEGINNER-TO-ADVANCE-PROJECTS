import React from 'react';

function Cards(Props){
  return <>
  <div class="conyainer">
<div class="cards">
    <div class="card1">
      <img src= {Props.imgsrc}/>
      <div class="card1-head">{Props.heading}</div>
<div class="card-name">{Props.name}</div>
<div class="card-btn"><button type="button">Watch Now</button></div>
    </div>
</div>
    </div>
  </>
};

export default Cards;
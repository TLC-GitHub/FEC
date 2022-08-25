import React, { useState } from 'react';

function Answers({answers}) {
  //should sort the incoming answers according to seller > helpfulness > rest


  return (
    <div>
      <div> A: Answer body</div> <div> Helpful <button type="button" text={answers.helpfulness} onClick={console.log("put request")} />  </div>
    </div>
  )
}

export default Answers;
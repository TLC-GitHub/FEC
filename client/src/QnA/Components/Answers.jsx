import React, { useState } from 'react';

function Answers({answers}) {
  //should sort the incoming

let [helpfulAnswer, setHelpfulAnswer] =

  return (
    <div>
      <div> A: Answer body</div> <div> Helpful <button type="button" text={answers.helpfulness} onClick={setCount(count + 1)} />  </div>
    </div>
  )
}
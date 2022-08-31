import React, {useState} from 'react';

const LeftButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button onClick = { () => props.previousImage() }>&#8592;</button>
  );
}

export default LeftButton;
import React, {useState} from 'react';

const LeftButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button onClick = { () => props.nextImage() }>&#8594;</button>
  );
}

export default LeftButton;
import React, {useState} from 'react';

const DownButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button onClick = { () => props.nextImage() }>&#8595;</button>
  );
}

export default DownButton;
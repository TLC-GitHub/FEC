import React, {useState} from 'react';

const DownButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button className="button-vertical" onClick = { () => props.nextImage() }>&#10095;</button>
  );
}

export default DownButton;
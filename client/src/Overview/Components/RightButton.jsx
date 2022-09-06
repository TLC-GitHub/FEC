import React, {useState} from 'react';
import './styles.css';

const RightButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button className="button" onClick = { () => props.nextImage() }>&#8594;</button>
  );
}

export default RightButton;
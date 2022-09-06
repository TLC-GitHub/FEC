import React, {useState} from 'react';
import './styles.css';

const LeftButton = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <button className="button" onClick = { () => props.previousImage() }>&#8592;</button>
  );
}

export default LeftButton;
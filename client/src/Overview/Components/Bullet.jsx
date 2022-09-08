import React, {useState} from 'react';

const Bullet = (props) => {
  const [data, setData] = useState('');
  const getData = () => setData(data);
  let bullet = props.value + props.feature;

  return(
    <li>{bullet}</li>
  );
}

export default Bullet;
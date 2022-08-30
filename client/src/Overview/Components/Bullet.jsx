import React, {useState} from 'react';

const Bullet = (props) => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return(
    <li>{props.item}</li>
  );
}

export default Bullet;
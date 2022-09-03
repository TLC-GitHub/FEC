import React, {useState} from 'react';
import Bullet from './Bullet.jsx';

const ProductBullets = (props) => {
  const [data, setData] = useState([]);
  const getData = () => setData(data);
  const bullets = props.features.length ? props.features.map((item, i) =>{
    return <Bullet key={i} feature={item.feature} value={item.value}/>;
  }) : 'No features';

  return(
    <div>
      <ul>{bullets}</ul>
    </div>

  );
}

export default ProductBullets;
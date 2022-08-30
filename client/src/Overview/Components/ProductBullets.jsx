import React, {useState} from 'react';
import Bullet from './Bullet.jsx';

const ProductBullets = () => {
  const [data, setData] = useState([]);
  const getData = () => setData(data);
  const points = ['First point', 'Another point', 'Yet another point', 'One last point'];
  const bullets = points.map((item, i) =>{
    return <Bullet key={i} item={item} />;
  });

  return(
    <div>
      <ul>{bullets}</ul>
    </div>

  );
}

export default ProductBullets;
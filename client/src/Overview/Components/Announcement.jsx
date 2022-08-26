import React, {useState} from 'react';

const Announcement = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <h2>There are some new fabrics you can cover your preferred selection of skin cells with!</h2>
  );
}

export default Announcement;
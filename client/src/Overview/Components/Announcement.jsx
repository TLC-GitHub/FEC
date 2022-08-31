import React, {useState} from 'react';

const Announcement = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <h2>Our new pants are all yours, only on the app. Download the App</h2>
  );
}

export default Announcement;
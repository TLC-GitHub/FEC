import React, {useState} from 'react';

function OverviewModule() {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <div></div>
  );
}

export default OverviewModule;
import React, {useState} from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Announcement from './Announcement.jsx';

const OverviewModule = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Announcement />
      </div>
    </div>
  );
}

export default OverviewModule;
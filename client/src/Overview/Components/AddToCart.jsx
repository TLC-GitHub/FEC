import React, {useState} from 'react';
import AddToBagButton from './AddToBagButton.jsx';
import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import BookmarkButton from './BookmarkButton.jsx';

const AddToCart = () => {
  const [data, setData] = useState('');

  return (
  <div>
    <div>
    <SizeDropdown />
    </div>
    <div>
    <QuantityDropdown />
    </div>
    <div>
    <AddToBagButton />
    </div>
    <div>
    <BookmarkButton />
    </div>
  </div>
  );
}

export default AddToCart;
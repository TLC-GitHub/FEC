import React, {useState} from 'react';
import AddToBagButton from './AddToBagButton.jsx';
import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import BookmarkButton from './BookmarkButton.jsx';

const AddToCart = () => {
  const [data, setData] = useState('');
  const [menuOption, setMenuOption] = useState('select');
  const [sizeNumbers, setSizeNumbers] = useState([]);

  const changeMenuOption = (event) => {
    setMenuOption(event.target.value);
  };

  return (
  <div>
    <div>
    <SizeDropdown sizeNumbers={sizeNumbers} menuOption={menuOption} changeMenuOption={changeMenuOption} />
    </div>
    <div>
    <QuantityDropdown sizeNumbers={sizeNumbers} menuOption={menuOption} changeMenuOption={changeMenuOption} />
    </div>
    <div>
    <AddToBagButton />
    </div>
    <div>
    <BookmarkButton />
    </div>
  </div>
  );
};

export default AddToCart;
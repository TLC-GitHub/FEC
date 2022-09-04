import React, {useState} from 'react';
import AddToBagButton from './AddToBagButton.jsx';
import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import BookmarkButton from './BookmarkButton.jsx';

const AddToCart = () => {
  const [data, setData] = useState('');
  const [menuOption, setMenuOption] = useState('select');
  const [sizeNumbers, setSizeNumbers] = useState([]);
  const [selectedQuantity, selectQuantity] = useState(0);

  const changeMenuOption = (event) => {
    setMenuOption(event.target.value);
  };

  return (
  <div>
    <div>
    <SizeDropdown sizeNumbers={sizeNumbers} menuOption={menuOption} changeMenuOption={changeMenuOption} />
    </div>
    <div>
    <QuantityDropdown selectedQuantity={selectedQuantity} sizeNumbers={sizeNumbers} menuOption={menuOption} changeMenuOption={changeMenuOption} />
    </div>
    <div>
    <AddToBagButton selectedQuantity={selectedQuantity} sizeNumbers={sizeNumbers} />
    </div>
    <div>
    <BookmarkButton />
    </div>
  </div>
  );
};

export default AddToCart;
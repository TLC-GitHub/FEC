import React, {useState, useCallback} from 'react';
import AddToBagButton from './AddToBagButton.jsx';
import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';
import BookmarkButton from './BookmarkButton.jsx';

const AddToCart = () => {
  const [data, setData] = useState('');
  const [menuOption, setMenuOption] = useState('select');
  const [sizeNumbers, setSizeNumbers] = useState([]);
  console.log(menuOption);



  return (
  <div>
    <div>
    <SizeDropdown sizeNumbers={sizeNumbers} setMenuOption={setMenuOption} menuOption={menuOption} setSizeNumbers={setSizeNumbers}/>
    </div>
    <div>
    <QuantityDropdown sizeNumbers={sizeNumbers} menuOption={menuOption} />
    </div>
    <div>
    <AddToBagButton sizeNumbers={sizeNumbers} menuOption={menuOption} setMenuOption={setMenuOption} />
    </div>
    <div>
    <BookmarkButton />
    </div>
  </div>
  );
};

export default AddToCart;
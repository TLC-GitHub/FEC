import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Authorization from '../../../../config.js';


const AddToBagButton = (props) => {
  const [inBag, addToBag] = useState(false);

  const headers = {
    headers: Authorization
  }

  const toggleIsInBag = () => {
    addToBag(current => !current);
  };

  useEffect(() => {
    document.getElementById(`addToBag`).addEventListener('click', handleClick)
  }, []);

  const handleClick = () => {
    axios.post(`/cart?sku_id=${props.sizeNumbers[2]}`, {"sku_id": props.sizeNumbers[2], count: }, {headers})
  };
return (
  <div>s
    <button id="addToBag" onClick = {toggleIsInBag}>
      Add To Bag
    </button>
  </div>
  );
}

export default AddToBagButton;
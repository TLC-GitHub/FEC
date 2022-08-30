import React, {useState} from 'react';

const AddToBagButton = () => {
  const [inBag, addToBag] = useState(false);

  const toggleIsInBag = () => {
    addToBag(current => !current);
  };

return (
  <div>
    <button onClick = {toggleIsInBag}>
      Add To Bag
    </button>
  </div>
  );
}

export default AddToBagButton;
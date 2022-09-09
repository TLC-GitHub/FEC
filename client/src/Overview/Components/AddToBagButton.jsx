import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Authorization from '../../../../config.js';
import axios from 'axios';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';


const AddToBagButton = (props) => {
  const [inBag, addToBag] = useState(false);




  // console.log('menu state outside of click handler', props.menuOption);


  useEffect(() => {
    document.getElementById(`addToBag`).addEventListener('click', handleClick)
  }, [props.menuOption]);

  const handleClick = (event) => {
    // let currentSKU;
    // console.log(currentSKU);
    // for(let i = 0; i < props.sizeNumbers.length; i++){
    //   if(props.sizeNumbers[i][0] === props.menuOption){
    //     currentSKU = Number(props.sizeNumbers[i][2]);
    //   }
    // }
    console.log('menu option in click handler', props.menuOption);
    axios.post(`${API_URL}/cart`,{ sku_id : props.menuOption[2] }, {
          headers: Authorization
        })
        .then((response) => {
          console.log(201);
        })
        .catch((err) => {
          console.log(err);
        })

  };
return (
  <div>
    <button className="bag" id="addToBag" onClick = {(event) => handleClick(event)}>
      Add To Bag
    </button>
  </div>
  );
}

export default AddToBagButton;
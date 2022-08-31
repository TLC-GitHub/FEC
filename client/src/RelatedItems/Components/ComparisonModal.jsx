import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBox } from './Styles.jsx'
import ProductCard from './ProductCard.jsx';
import './Modal.css';

const ComparisonModal = ({ showModal, hide, targetID }) => showModal ? ReactDOM.createPortal(
  <React.Fragment>

    <div className="modal-overlay"/>
      {/* <ModalBox /> */}
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            Compare product: {targetID}
          </p>
        </div>
        </div>
  </React.Fragment>, document.body

) : null;

// function ComparisonModal({showModal, targetID}) {

//   const handleClose = (e) => {
//     console.log('close is click');
//   }


//   return (
//     <div>
//       { showModal &&
//           <div>
//           HELLO I AM A MODAL {targetID}
//           <div>
//             <button onClose={handleClose}>close</button>
//           </div>
//         </div>

//       }
//     </div>
//   )

// }

export default ComparisonModal;
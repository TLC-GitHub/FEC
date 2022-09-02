import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBox } from './Styles.jsx'
import ProductCard from './ProductCard.jsx';
import ComparisonFetch from './ComparisonFetch.jsx';

import './Modal.css';  // to be deleted

const ComparisonModal = ({ showModal, hide, targetID, productID, curProduct }) => showModal ? ReactDOM.createPortal(
  <React.Fragment>

    <div className="modal-overlay"/>
      {/* <ModalBox /> */}
      <div className="modal-wrapper"
      // aria-modal aria-hidden tabIndex={-1} role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            TO BE DELETED ---- product: {targetID} vs {productID}
          </p>
          <div>
            <ComparisonFetch targetID={targetID} productID={productID} curProduct={curProduct}/>
          </div>
        </div>
      </div>
  </React.Fragment>, document.body

) : null;

export default ComparisonModal;
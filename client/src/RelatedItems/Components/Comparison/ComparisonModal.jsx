import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBox } from '../Styles.jsx'
// import ProductCard from './ProductCard.jsx';
import ComparisonTable from './ComparisonTable.jsx';

import './Modal.css';  // to be deleted

const ComparisonModal = ({ showModal, hide, curProduct, curStyle, targetID, targetCategory, targetName, targetOriginal_price, targetSale_price, targetRatings, targetFeatures, targetStyles }) => showModal ? ReactDOM.createPortal(
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
          <div>
            {/* <ComparisonFetch */}
            <ComparisonTable
              targetID={targetID}
              targetCategory={targetCategory}
              targetName={targetName}
              targetOriginal_price={targetOriginal_price}
              targetSale_price={targetSale_price}
              targetRatings={targetRatings}
              targetFeatures={targetFeatures}
              targetStyles={targetStyles}
              curProduct={curProduct}
              curStyle={curStyle}
            />
          </div>
        </div>
      </div>
  </React.Fragment>, document.body

) : null;

export default ComparisonModal;
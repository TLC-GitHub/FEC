import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper, Modal, ModalHeader, ModalCloseBtn, Table, TableHead, StyledHead } from '../Styles.jsx'
import ComparisonTable from './ComparisonTable.jsx';

const ComparisonModal = ({ showModal, hide, curProduct, curStyle, targetID, targetCategory, targetName, targetOriginal_price, targetSale_price, targetRatings, targetFeatures, targetStyles }) => showModal ? ReactDOM.createPortal(
  <React.Fragment>
      <ModalOverlay />
      <ModalWrapper>
        <Modal>
          <ModalHeader>
            <ModalCloseBtn onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </ModalCloseBtn>
          </ModalHeader>
          <br />
          <Table>
            <TableHead>
              <tr style={{backgroundColor: '#C9D6DF'}}>
                <StyledHead colSpan='3' style={{borderRadius: "10px"}}>Comparing</StyledHead>
              </tr>
              <tr>
                <StyledHead>{curProduct.name}</StyledHead>
                <StyledHead></StyledHead>
                <StyledHead>{targetName}</StyledHead>
              </tr>
            </TableHead>
            <ComparisonTable
              targetID={targetID}
              targetCategory={targetCategory}
              targetOriginal_price={targetOriginal_price}
              targetSale_price={targetSale_price}
              targetRatings={targetRatings}
              targetFeatures={targetFeatures}
              targetStyles={targetStyles}
              curProduct={curProduct}
              curStyle={curStyle}
            />
          </Table>
        </Modal>
      </ModalWrapper>
  </React.Fragment>, document.body

) : null;

export default ComparisonModal;
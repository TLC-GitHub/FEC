import { useState } from 'react';

const UseReviewModal = () => {
  let [showReviewModal, setReviewShowModal] = useState(false);

  function toggleReviewModal() {
    setReviewShowModal(!showReviewModal);
  }

  return {
    showReviewModal,
    toggleReviewModal,
  }
};

export default UseReviewModal;
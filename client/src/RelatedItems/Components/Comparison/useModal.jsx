import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  function toggle() {
    setShowModal(!showModal);
  }

  return {
    showModal,
    toggle,
  }
};

export default useModal;
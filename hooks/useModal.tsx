'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRoot = document.getElementById('portal') as HTMLElement;

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  function ModalPortal({ children }: ModalPortalProps) {
    if (!modalOpen) return null;

    return createPortal(
      <div className="fixed top-0 left-0 h-full w-full">
        {children}
        <div
          role="presentation"
          onClick={closeModal}
          className="absolute w-full h-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        />
      </div>,
      modalRoot
    );
  }

  return { openModal, closeModal, ModalPortal };
};

export default useModal;

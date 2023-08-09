import { checkoutModal } from '@everfund/js-sdk';
import { useState } from 'react';
import { ModalProps } from '../types';

type useDonationCheckoutModalPropsReturn = {
  isOpen?: boolean;
  openModal: () => void;
}

export function useDonationCheckoutModal(options: ModalProps):useDonationCheckoutModalPropsReturn {
  // Compose in the generic options to the user options
  const [isOpen, setIsDonationWidgetOpen] = useState(false);

  function openModal() {
    setIsDonationWidgetOpen(true);
    checkoutModal.modal({
      ...options,
      onSuccess: (data) => {
        setIsDonationWidgetOpen(false);
        options.onSuccess && options.onSuccess(data);
      },
      onFailure: (err) => {
        setIsDonationWidgetOpen(false);
        options.onFailure && options.onFailure(err);
      },
      onClose: () => {
        setIsDonationWidgetOpen(false);
        options.onClose && options.onClose();
      },
    });
  }

  return { isOpen, openModal };
}

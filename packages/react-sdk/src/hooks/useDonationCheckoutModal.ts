import { checkoutModal } from '@everfund/js-sdk';
import { useState } from 'react';
import { ModalProps } from '../types';

export function useDonationCheckoutModal(options: ModalProps) {
  // Compose in the generic options to the user options
  const [isOpen, setIsDonationWidgetOpen] = useState(false);

  function openModal() {
    setIsDonationWidgetOpen(true);
    checkoutModal.modal({
      ...options,
      onSuccess: (data) => {
        setIsDonationWidgetOpen(false);
        options.onSuccess(data);
      },
      onFailure: (err) => {
        setIsDonationWidgetOpen(false);
        options.onFailure(err);
      },
      onClose: () => {
        setIsDonationWidgetOpen(false);
        options.onClose();
      },
    });
  }

  return { isOpen, openModal };
}

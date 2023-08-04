import everfund from '@everfund/js-sdk';
import { useState } from 'react';
import { ModalProps } from './types';

export function useDonationWidget(options: ModalProps) {
  // Compose in the generic options to the user options
  const [isOpen, setIsDonationWidgetOpen] = useState(false);

  function openDonationWidget() {
    setIsDonationWidgetOpen(true);
    everfund.donationWidget({
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

  return { isOpen, openDonationWidget };
}

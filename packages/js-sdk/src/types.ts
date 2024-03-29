export type SuccessResponse = {
  /** Donation Id ie d_XXXXXXX */
  id: string;
  /** Supporter details */
  support?: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    address?: {
      line1: string;
      line2?: string;
      postcode: string;
      city: string;
      country: string;
    };
  };
  /** Donation Type */
  type?: 'SINGLE' | 'MONTHLY';
  /** Aggreed to gift aid */
  agreededToGiftAid: boolean;
  contactByPhone: boolean;
  contactByPost: boolean;
  contactByEmail: boolean;
  donation?: {
    donationAmount?: number;
    coveredProcessingFee?: boolean;
    isDomesticCard?: boolean;
    isSameCurrency?: boolean;
  };
};

export type ModalProps = {
  /** Donation Widget Code get from the dashboard */
  code: string;
  domain?: string;
  /** Will close donation modal once payment has succeeded */
  closeOnSuccess?: boolean | null;
  onSuccess?(data: SuccessResponse): void;
  onFailure?(data: Record<string, unknown>): void;
  onClose?(): void;
};

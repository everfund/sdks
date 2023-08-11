import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDonationCheckoutModal } from './useDonationCheckoutModal';

const donationCheckoutModalMock = vi.hoisted(() => ({
  modal: vi.fn(),
}));

vi.mock('@everfund/js-sdk', () => ({
  checkoutModal: donationCheckoutModalMock,
}));

describe('useDonationCheckoutModal', () => {
  const code = 'some-code';

  it('isOpen is false on first use', () => {
    const { result } = renderHook(() =>
      useDonationCheckoutModal({
        code,
        onSuccess: () => {},
        onFailure: () => {},
        onClose: () => {},
      })
    );

    expect(result.current.isOpen).toBe(false);
  });

  it('isOpen is true when openModal is called', () => {
    const { result } = renderHook(() =>
      useDonationCheckoutModal({
        code,
        onSuccess: () => {},
        onFailure: () => {},
        onClose: () => {},
      })
    );

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBe(true);
    expect(donationCheckoutModalMock.modal).toHaveBeenCalled();
  });
});

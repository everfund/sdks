import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDonationWidget } from './useDonationWidget';

const everfundMock = vi.hoisted(() => ({
  donationWidget: vi.fn(),
}));

vi.mock('@everfund/js-sdk', () => ({
  default: everfundMock,
}));

describe('useDonationWidget', () => {
  const code = 'some-code';

  it('isOpen is false on first use', () => {
    const { result } = renderHook(() =>
      useDonationWidget({
        code,
        onSuccess: () => {},
        onFailure: () => {},
        onClose: () => {},
      })
    );

    expect(result.current.isOpen).toBe(false);
  });

  it('isOpen is true when openDonationWidget is called', () => {
    const { result } = renderHook(() =>
      useDonationWidget({
        code,
        onSuccess: () => {},
        onFailure: () => {},
        onClose: () => {},
      })
    );

    act(() => {
      result.current.openDonationWidget();
    });

    expect(result.current.isOpen).toBe(true);
    expect(everfundMock.donationWidget).toHaveBeenCalled();
  });
});

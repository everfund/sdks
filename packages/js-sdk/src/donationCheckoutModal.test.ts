import { describe, it, expect, afterEach, vi } from 'vitest';
import { checkoutModal } from './donationCheckoutModal';
import type { SuccessResponse } from './types';

describe('donationCheckoutModal', () => {
  const code = 'some-code';

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('should be defined', () => {
    expect(checkoutModal).toBeDefined();
  });

  it('should have a version', () => {
    expect(checkoutModal.version).toBeDefined();
  });

  it('should have a modal method', () => {
    expect(checkoutModal.modal).toBeDefined();
  });

  it('renders iframe with correct src', () => {
    checkoutModal.modal({
      code,
      onSuccess: () => {},
      onFailure: () => {},
      onClose: () => {},
    });

    const iframe = document.getElementById('ef-modal') as HTMLIFrameElement;

    expect(iframe).toBeDefined();
    expect(iframe.src).toEqual(
      `https://evr.fund/${code}/modal?embed_origin=http://localhost:3000&embeded=true`
    );
  });

  it('renders iframe with attributes', () => {
    checkoutModal.modal({
      code,
      onSuccess: () => {},
      onFailure: () => {},
      onClose: () => {},
    });

    const iframe = document.getElementById('ef-modal') as HTMLIFrameElement;

    expect(iframe).toBeDefined();

    console.log(document.getElementsByTagName('html')[0].innerHTML);

    expect(iframe.ariaModal).toBe('true');
    expect(iframe.ariaLabel).toBe('Everfund Donation Modal');
    expect(iframe.getAttribute('role')).toBe('donation-modal');
  });

  it('renders iframe with correct src with custom domain', () => {
    checkoutModal.modal({
      code,
      domain: 'https://new.domain',
      onSuccess: () => {},
      onFailure: () => {},
      onClose: () => {},
    });

    const iframe = document.getElementById('ef-modal') as HTMLIFrameElement;

    expect(iframe).toBeDefined();
    expect(iframe.src).toEqual(
      `https://new.domain/${code}/modal?embed_origin=http://localhost:3000&embeded=true`
    );
  });

  it('renders iframe with closeOnSuccess on src', () => {
    checkoutModal.modal({
      code,
      closeOnSuccess: true,
      onSuccess: () => {},
      onFailure: () => {},
      onClose: () => {},
    });

    const iframe = document.getElementById('ef-modal') as HTMLIFrameElement;

    expect(iframe).toBeDefined();
    expect(iframe.src).toEqual(
      `https://evr.fund/${code}/modal?embed_origin=http://localhost:3000&embeded=true&close_on_success=true`
    );
  });

  it('onSuccess is called', () => {
    const mockSuccessResponse: SuccessResponse = {
      id: 'fake-id',
      agreededToGiftAid: false,
      contactByPhone: false,
      contactByPost: false,
      contactByEmail: false,
    };
    const onSuccess = vi.fn();
    checkoutModal.modal({
      code,
      onSuccess,
      onFailure: () => {},
      onClose: () => {},
    });

    checkoutModal['onSuccess'](mockSuccessResponse);

    expect(onSuccess).toHaveBeenCalledWith(mockSuccessResponse);
  });

  it('onFailure is called', () => {
    const mockFailureResponse: Record<string, unknown> = {
      id: 'fake-id',
    };
    const onFailure = vi.fn();
    checkoutModal.modal({
      code,
      onSuccess: () => {},
      onFailure,
      onClose: () => {},
    });

    checkoutModal['onFailure'](mockFailureResponse);

    expect(onFailure).toHaveBeenCalledWith(mockFailureResponse);
  });

  it('onClose is called', () => {
    const onClose = vi.fn();
    checkoutModal.modal({
      code,
      onSuccess: () => {},
      onFailure: () => {},
      onClose,
    });

    checkoutModal['onClose']();

    expect(onClose).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    checkoutModal.modal({
      code,
      onSuccess: () => {},
      onFailure: () => {},
      onClose: () => {},
    });

    const html = document.getElementsByTagName('html')[0].innerHTML;

    expect(html).toMatchInlineSnapshot(
      '"<head><style id=\\"_goober\\"> .go2719887912{border:none;width:100%;margin:0;height:100%;}</style><style id=\\"_goober\\"> .go635390755{pointer-events:all;z-index:9999999;display:flex;width:100%;transform:opacity(0);transition:transform 0.3s ease;overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%;}</style><style id=\\"_goober\\"> @keyframes go2097899587{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style><style id=\\"_goober\\"> .go2771443547{display:inline-block;position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);width:64px;height:64px;}.go2771443547 div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid white;border-radius:50%;animation:go2097899587 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:white transparent transparent transparent;}.go2771443547 div:nth-child(1){animation-delay: -0.45s;}.go2771443547 div:nth-child(2){animation-delay: -0.3s;}.go2771443547 div:nth-child(3){animation-delay: -0.15s;}</style><style id=\\"_goober\\"> .go371890835{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.7);z-index:9999998;display:flex;justify-content:space-around;align-items:stretch;backdrop-filter:blur(8px);}</style></head><body><div class=\\"embedContainer go371890835\\"><div class=\\"ldsRing go2771443547\\"><div></div></div><div class=\\"embedModal go635390755\\"><iframe src=\\"https://evr.fund/some-code/modal?embed_origin=http://localhost:3000&amp;embeded=true\\" id=\\"ef-modal\\" class=\\"go2719887912\\" role=\\"donation-modal\\" tabindex=\\"0\\"></iframe></div></div></body>"'
    );
  });
});

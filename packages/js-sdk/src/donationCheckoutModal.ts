import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { ModalProps } from './types';
import { version } from './version';

import { css, keyframes } from 'goober';
import { serializeQueryParams } from './libs/serializeQueryParams';

export interface CustomWindow extends Window {
  Everfund: DonationCheckoutModal;
}

declare let window: CustomWindow;

class DonationCheckoutModal {
  private donationWidgetOpen: boolean = false;
  private onSuccess: ModalProps['onSuccess'] = () => {};
  private onFailure: ModalProps['onFailure'] = () => {};
  private onClose: ModalProps['onClose'] = () => {};
  version: string;

  constructor() {
    this.version = version;
    if (typeof window !== 'undefined') {
      this.setupButtonListeners();
      this.setupIframeListeners();
    }
  }

  public modal({
    code,
    domain,
    closeOnSuccess,
    onSuccess,
    onFailure,
    onClose,
  }: ModalProps) {
    if (onSuccess) {
      this.onSuccess = onSuccess;
    }
    if (onFailure) {
      this.onFailure = onFailure;
    }
    if (onClose) {
      this.onClose = onClose;
    }
    const origin = window.location.origin;

    try {
      const modalFrame = document.createElement('iframe');
      modalFrame.src = `${
        domain || 'https://evr.fund'
      }/${code}/modal${serializeQueryParams({
        embed_origin: origin,
        embeded: true,
        close_on_success: closeOnSuccess,
      })}`;

      // deperciated
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modalFrame.allowPaymentRequest = true;

      const cssEmbedIframe = css({
        border: 'none',
        width: '100%',
        margin: 0,
        height: '100%',
      });
      modalFrame.id = 'ef-modal';
      modalFrame.className = cssEmbedIframe;
      modalFrame.ariaModal = 'true';
      modalFrame.ariaLabel = 'Everfund Donation Modal';
      modalFrame.setAttribute('role', 'donation-modal');
      modalFrame.addEventListener('load', function () {
        const loadingSpinner =
          document.querySelector<HTMLDivElement>('.ldsRing');
        const modalWrap = document.querySelector<HTMLDivElement>('.embedModal');
        loadingSpinner?.remove();
        modalWrap!.style.transform = 'opacity(1)';
      });

      const modalWrap = document.createElement('div');

      const cssEmbedModal = css({
        pointerEvents: 'all',
        zIndex: '9999999',
        display: 'flex',
        width: '100%',
        transform: 'opacity(0)',
        transition: 'transform 0.3s ease',
        overflowY: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        height: '100%',
      });

      modalWrap.className = `embedModal ${cssEmbedModal}`;
      modalWrap.appendChild(modalFrame);

      const embedContainer = document.createElement('div');
      disableBodyScroll(embedContainer);

      const loadingSpinner = document.createElement('div');

      const cssKeyframeLDsring = keyframes({
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      });

      const cssLdsRing = css({
        display: 'inline-block',
        position: 'absolute',
        left: 'calc(50% - 32px)',
        top: 'calc(50% - 32px)',
        width: '64px',
        height: '64px',
        '& div': {
          boxSizing: 'border-box',
          display: 'block',
          position: 'absolute',
          width: '51px',
          height: '51px',
          margin: '6px',
          border: '6px solid white',
          borderRadius: '50%',
          animation: `${cssKeyframeLDsring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
          borderColor: 'white transparent transparent transparent',
        },
        '& div:nth-child(1)': {
          animationDelay: ' -0.45s',
        },
        '& div:nth-child(2)': {
          animationDelay: ' -0.3s',
        },
        '& div:nth-child(3)': {
          animationDelay: ' -0.15s',
        },
      });
      loadingSpinner.className = `ldsRing ${cssLdsRing}`;

      const div = document.createElement('div');

      Array(4)
        .fill(4)
        .forEach(function () {
          loadingSpinner.appendChild(div);
        });

      const cssEmbedContainer = css({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: '9999998',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backdropFilter: 'blur(8px)',
      });

      embedContainer.className = `embedContainer ${cssEmbedContainer}`;
      embedContainer.appendChild(loadingSpinner);
      embedContainer.appendChild(modalWrap);

      document.body.appendChild(embedContainer);
      modalFrame.setAttribute('tabindex', '0');
      modalFrame.focus();
    } catch (e) {
      console.log(e);

      window.location.replace(
        `https://${domain || 'evr.fund'}/${code}/modal${serializeQueryParams({
          return_url: origin,
        })}`
      );
    }
  }

  private setupButtonListeners() {
    document.addEventListener(
      'click',
      function (e: MouseEvent) {
        const match = (e.target as HTMLElement).closest('[data-ef-modal]');

        if (!match || checkoutModal.donationWidgetOpen) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();

        let code = match.getAttribute('data-ef-modal');

        if (!code) {
          console.error(
            'Everfund: data-ef-modal is required! eg <button data-ef-modal="j1q16MvJl5lqfji06bVFKei3HZkW"> modal </button>'
          );
          return;
        }

        if (
          new RegExp(
            '^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$',
            'i'
          ).test(code)
        ) {
          console.warn(
            `Everfund: url's are deprecated please use a code instead`
          );

          code = new URL(code).pathname.replace('/', '');
        }

        checkoutModal.donationWidgetOpen = true;
        checkoutModal.modal({
          code,
          onSuccess: () => {},
          onFailure: () => {},
          onClose: () => {
            clearAllBodyScrollLocks();
          },
        });
      },
      false
    );
  }

  private setupIframeListeners() {
    window.addEventListener(
      'message',
      function (e) {
        const embed = document.querySelector('.' + 'embedContainer');
        switch (e.data.message) {
          case 'everfund:ready': {
            const loadingSpinner =
              document.querySelector<HTMLDivElement>('#ldsRing');
            const modalWrap = document.querySelector<HTMLDivElement>(
              '.' + 'embedModal'
            );
            loadingSpinner?.remove();
            modalWrap!.style.transform = 'opacity(1)';
            break;
          }
          case 'everfund:success': {
            const data = e.data.content;
            checkoutModal.onSuccess && checkoutModal.onSuccess(data);
            break;
          }
          case 'everfund:failure': {
            checkoutModal.onFailure && checkoutModal.onFailure(e.data.content);
            break;
          }
          case 'everfund:close': {
            embed && enableBodyScroll(embed);
            embed && embed.remove();
            checkoutModal.donationWidgetOpen = false;
            checkoutModal.onClose && checkoutModal.onClose();
            clearAllBodyScrollLocks();
            break;
          }
        }
      },
      false
    );
  }
}

const checkoutModal = new DonationCheckoutModal();

export { checkoutModal };

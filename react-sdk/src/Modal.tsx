import React, { useState, useCallback, useEffect } from 'react';
import { ModalProps } from './types';
import ReactDOM from 'react-dom';

// import { styled, keyframes } from '@stitches/react';

const { styled, keyframes } = require('@stitches/react');

interface EverfundReactProps extends ModalProps {
  open: boolean;
  closeOnSuccess?: boolean;
  selector?: string;
}

export const EverfundModal = ({
  open,
  selector,
  code,
  domain,
  closeOnSuccess,
  onSuccess,
  onFailure,
  onClose,
}: EverfundReactProps) => {
  const [isLoading, setLoading] = useState(true);

  // Don't load in non browser context
  if (typeof window === 'undefined') return null;

  const onMessage = useCallback(
    (e) => {
      switch (e.data.message) {
        case 'everfund:ready':
          setLoading(false);
          break;
        case 'everfund:success':
          const data = e.data.content;
          onSuccess(data);
          break;
        case 'everfund:failure':
          onFailure(e.data.content);
          break;
        case 'everfund:close':
          onClose();
          setLoading(true);
          break;
      }
    },
    [onSuccess, onFailure, onClose]
  );

  useEffect(() => {
    window.addEventListener('message', onMessage, false);
    return () => window.removeEventListener('message', onMessage, false);
  });

  if (!open) return null;

  const element = document.querySelector<HTMLElement>(selector || '#root');

  if (!element) {
    console.error(
      `Everfund Modal: Please define a parent container that exists '${selector}'`
    );
    return null;
  }

  let makeQS = function (obj: any) {
    var str = [];
    for (var p in obj)
      if (obj[p] && obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  };

  const EmbedModal = styled('div', {
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

  const EmbedContainer = styled('div', {
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

  const EmbedIframe = styled('iframe', {
    border: 'none',
    width: '100%',
    margin: 0,
    height: '100%',
  });

  const cssKeyframeLDsring = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  });

  const LdsRing = styled('div', {
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

  return ReactDOM.createPortal(
    <EmbedContainer>
      {isLoading && (
        <LdsRing>
          <div />
          <div />
          <div />
          <div />
        </LdsRing>
      )}
      <EmbedModal>
        <EmbedIframe
          src={`https://${domain || 'evr.fund'}/${code}/modal?${makeQS({
            embed_origin: origin,
            embeded: true,
            close_on_success: closeOnSuccess,
          })}`}
        />
      </EmbedModal>
    </EmbedContainer>,
    element
  );
};

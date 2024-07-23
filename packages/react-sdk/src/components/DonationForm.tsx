import React, { useEffect } from 'react';
import { serializeQueryParams } from '../libs/serializeQueryParams';
import { DonationFormProps, SuccessResponse } from '../types';
import { css, keyframes } from 'goober';

const handleIFrameMessage =
  ({
    onLoadingComplete,
    onSuccess,
    onFailure,
  }: { onLoadingComplete: () => void } & Pick<
    DonationFormProps,
    'onSuccess' | 'onFailure'
  >) =>
  ({ data }: { data?: unknown }) => {
    const {
      message,
      content,
    }: {
      message?: string;
      content?: SuccessResponse | Record<string, unknown>;
    } = data ?? {};

    if (!message) {
      return;
    }

    switch (message) {
      case 'everfund:ready': {
        onLoadingComplete();
        break;
      }
      case 'everfund:success': {
        if (content) {
          onSuccess && onSuccess(content as SuccessResponse);
        }
        break;
      }
      case 'everfund:failure': {
        if (content) {
          onFailure && onFailure(content);
        }
        break;
      }
    }
  };

const LoadingSpinner = () => {
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
      border: '6px solid black',
      borderRadius: '50%',
      animation: `${cssKeyframeLDsring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: 'black transparent transparent transparent',
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

  return (
    <div className={`ldsRing ${cssLdsRing}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const outerDivStyles = {
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  position: 'relative',
} as const;

const iframeStyles = {
  border: 'none',
  margin: 0,
  width: '100%',
  height: '100%',
} as const;

export const DonationForm = ({
  code,
  domain,
  onSuccess,
  onFailure,
  styles,
}: DonationFormProps) => {
  const [loading, setLoading] = React.useState(true);
  const handleIFrameMessageFn = handleIFrameMessage({
    onSuccess,
    onFailure,
    onLoadingComplete: () => setLoading(false),
  });
  useEffect(() => {
    window.addEventListener('message', handleIFrameMessageFn, false);

    return () => {
      window.removeEventListener('message', handleIFrameMessageFn);
    };
  }, []);

  return (
    <div
      style={{
        ...outerDivStyles,
        ...styles,
      }}
    >
      {loading && <LoadingSpinner />}
      <iframe
        id="ef-donationForm"
        src={`${
          domain || 'https://evr.fund'
        }/${code}/widget${serializeQueryParams({
          embed_origin: window.location.origin,
        })}`}
        allow="payment"
        style={iframeStyles}
      />
    </div>
  );
};

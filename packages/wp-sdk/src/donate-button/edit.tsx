/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  Button,
  ButtonGroup,
  TextControl,
} from '@wordpress/components';
import type { BlockEditProps } from '@wordpress/blocks';
import * as React from 'react';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import Block from './block';
import { BlockAttributes } from './types';
import { useStyleProps } from '../hooks/use-style-props';
import './style.scss';

function WidthPanel({
  selectedWidth,
  setAttributes,
}: {
  selectedWidth: number | 'auto' | undefined;
  setAttributes: (attributes: Pick<BlockAttributes, 'width'>) => void;
}) {
  function handleChange(newWidth: number) {
    const width = selectedWidth === newWidth ? undefined : newWidth;
    setAttributes({ width });
  }

  return (
    <PanelBody title={__('Width settings', 'donate-checkout-button')}>
      <ButtonGroup aria-label={__('Button width', 'donate-checkout-button')}>
        {['auto', 25, 50, 75, 100].map((widthValue) => (
          <Button
            key={widthValue}
            isSmall
            variant={widthValue === selectedWidth ? 'primary' : undefined}
            onClick={() => handleChange(widthValue)}
          >
            {typeof widthValue === 'number' ? `${widthValue}%` : widthValue}
          </Button>
        ))}
      </ButtonGroup>
    </PanelBody>
  );
}

const Edit = ({
  attributes,
  setAttributes,
}: BlockEditProps<BlockAttributes>): JSX.Element => {
  const blockProps = useBlockProps();
  const styleProps = useStyleProps(attributes);

  const rCN = [
    'block-editor-block-list__block',
    'wp-block',
    'is-selected',
    'wp-elements-0',
  ];
  // function to remove class names given in an array from string
  const removeClassNamesFromString = (str: string, classNames: string[]) => {
    return classNames.reduce((acc, className) => {
      return acc.replace(className, '');
    }, str);
  };

  return (
    <>
      <InspectorControls>
        <WidthPanel
          selectedWidth={attributes.width}
          setAttributes={setAttributes}
        />
        <PanelBody title={__('Button Settings', 'donate-checkout-button')}>
          <PanelRow>
            <TextControl
              label={__('Code', 'donate-checkout-button')}
              value={attributes.code}
              onChange={(val) => setAttributes({ code: val })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div
        ref={blockProps.ref}
        className={clsx(
          'block-editor-block-list__block wp-block',
          'wp-block-button',
          'donate-checkout-button',
          {
            [`align-${attributes.textAlign}`]: attributes.textAlign,
            [`has-custom-width wp-block-button__width-${attributes.width}`]:
              attributes.width,
          }
        )}
      >
        <Block
          buttonText={attributes.buttonText}
          code={attributes.code}
          className={clsx(
            styleProps.className,
            removeClassNamesFromString(blockProps.className, rCN)
          )}
          style={styleProps.style}
        >
          <RichText
            inlineToolbar={false}
            allowedFormats={[]}
            onChange={(content) => setAttributes({ buttonText: content })} // onChange event callback
            value={attributes.buttonText} // Binding
            placeholder="Donate Now"
          />
        </Block>
      </div>
    </>
  );
};

export default Edit;

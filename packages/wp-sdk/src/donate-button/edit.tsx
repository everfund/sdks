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

/**
 * This is the editor component for the donation button block, allowing users to set the props
 * inside the wordpress sidebar interface
 * @param {BlockEditProps<BlockAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
function EditorFormControls({
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

/**
 * This is the donate-button block, which is rendered in the editor,
 * save.tsx is what is displayed on the frontend
 * @param {BlockEditProps<BlockAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
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

  /**
   * Removes the classnames from the blockProps.className that are in the rCN array
   * this is so we can show exactly what the user would see on the front end 
   * while remaing able to edit the block in the editor
   * @param {string} str - The string to remove the classnames from
   * @param {string[]} classNames - The classnames to remove from the string
   * @returns {string} - The string with the classnames removed
   */
  const removeClassNamesFromString = (str: string, classNames: string[]) => {
    return classNames.reduce((acc, className) => {
      return acc.replace(className, '');
    }, str);
  };

  return (
    <>
      <InspectorControls>
        <EditorFormControls
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

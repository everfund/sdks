/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  TextControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import * as React from 'react';

/**
 * This is the editor component for the donation form block, allowing users to set the props
 * inside the wordpress sidebar interface
 * @param {BlockEditProps<BlockAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
const EditorFormControls = ({ attributes, setAttributes }) => {
  const [showSizeControls, setSizeControls] = React.useState(false);
  const [showCustomDomain, setCustomDomainControls] = React.useState(false);
  return (
    <InspectorControls>
      <PanelBody title={__('Everfund Donation Form Settings', 'everfund')}>
        <TextControl
          label={__('Code', 'everfund')}
          value={attributes.code}
          onChange={(val) => setAttributes({ code: val })}
        />
        <ToggleControl
          label={__('Custom Domain', 'everfund')}
          checked={!!showCustomDomain}
          onChange={(isChecked) => setCustomDomainControls(isChecked)}
        />
        {showCustomDomain && (
          <TextControl
            label={__('Domain', 'everfund')}
            value={attributes.domain}
            onChange={(val) => setAttributes({ domain: val })}
          />
        )}
        <ToggleControl
          label={__('Custom Size', 'everfund')}
          checked={!!showSizeControls}
          onChange={(isChecked) => {
            setSizeControls(isChecked);
          }}
        />
        {showSizeControls && (
          <>
            <UnitControl
              label={__('Height', 'everfund')}
              value={attributes.height}
              onChange={(val) => setAttributes({ height: val })}
              units={[{ value: 'px', label: 'px' }]}
            />
            <UnitControl
              label={__('Width', 'everfund')}
              value={attributes.width}
              onChange={(val) => setAttributes({ width: val })}
              units={[{ value: 'px', label: 'px' }]}
            />
          </>
        )}
      </PanelBody>
    </InspectorControls>
  );
};

/**
 * This is the donation form iframe block, which is rendered in the editor,
 * save.tsx is what is displayed on the frontend
 * @param {BlockEditProps<BlockAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  return (
    <>
      <EditorFormControls
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <div
        {...blockProps}
        style={{
          width: attributes.width ?? '450px',
          height: attributes.height ?? '600px',
        }}
      >
        <div className="everfund-donation-form">
          <div className="everfund-loading-rings">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <iframe
            id="ef-donationForm"
            src={`${attributes.domain || 'https://evr.fund'}/${
              attributes.code
            }/widget?embed_origin=${origin}`}
            className="iframeStyles"
            allow="payment"
          />
        </div>
      </div>
    </>
  );
}

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
import { InspectorControls } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import { DonationFormAttributes } from './types';

type DonateFormEditorControlsProps = Pick<
	BlockEditProps<DonationFormAttributes>,
	'attributes' | 'setAttributes'
>;

/**
 * This is the editor component for the donation form block, allowing users to set the props
 * inside the wordpress sidebar interface
 * @param {DonateFormEditorControlsProps} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
export const DonateFormEditorControls = ({
	attributes,
	setAttributes,
}: DonateFormEditorControlsProps): JSX.Element => {
	const [showSizeControls, setSizeControls] = useState(false);
	const [showCustomDomain, setCustomDomainControls] = useState(false);
	return (
		<InspectorControls>
			<PanelBody
				title={__('Everfund Donation Form Settings', 'everfund')}
			>
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

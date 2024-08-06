/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	Button,
	ButtonGroup,
	TextControl,
} from '@wordpress/components';
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { DonateButtonAttributes, selectedWidth } from './types';

/**
 * This is the editor component for the donation button block, allowing users to set the props
 * inside the wordpress sidebar interface
 * @param {BlockEditProps<DonateButtonAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
export const DonateButtonEditorControls = ({
	attributes,
	setAttributes,
}: Pick<
	BlockEditProps<DonateButtonAttributes>,
	'attributes' | 'setAttributes'
>): JSX.Element => {
	function handleChange(newWidth: selectedWidth) {
		const width = attributes.width === newWidth ? undefined : newWidth;
		//@ts-expect-error - This is a valid value
		setAttributes({ width });
	}

	return (
		<InspectorControls>
			<PanelBody title={__('Width settings', 'donate-checkout-button')}>
				<ButtonGroup
					aria-label={__('Button width', 'donate-checkout-button')}
				>
					{['auto', 25, 50, 75, 100].map((widthValue) => (
						<Button
							key={widthValue}
							isSmall
							variant={
								widthValue === attributes.width
									? 'primary'
									: undefined
							}
							onClick={() =>
								handleChange(widthValue as selectedWidth)
							}
						>
							{typeof widthValue === 'number'
								? `${widthValue}%`
								: widthValue}
						</Button>
					))}
				</ButtonGroup>
			</PanelBody>
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
	);
};

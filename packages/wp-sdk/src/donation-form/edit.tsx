/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { DonationFormAttributes } from './types';
import { DonateFormEditorControls } from './editor-controls';

/**
 * This is the donation form iframe block, which is rendered in the editor,
 * save.tsx is what is displayed on the frontend
 * @param {BlockEditProps<DonationFormAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
export function Edit({
	attributes,
	setAttributes,
}: BlockEditProps<DonationFormAttributes>): JSX.Element {
	const blockProps = useBlockProps();
	return (
		<>
			<DonateFormEditorControls
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

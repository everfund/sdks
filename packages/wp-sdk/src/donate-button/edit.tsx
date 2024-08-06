/**
 * External dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import { DonateButtonBlock } from './block';
import { DonateButtonAttributes } from './types';
import { useStyleProps } from '../hooks/use-style-props';
import { DonateButtonEditorControls } from './editor-controls';
import './style.scss';

/**
 * This is the donate-button block, which is rendered in the editor,
 * save.tsx is what is displayed on the frontend
 * @param {BlockEditProps<DonateButtonAttributes>} props - The block props
 * @returns {JSX.Element} - The block edit component
 */
export const Edit = ({
	attributes,
	setAttributes,
}: BlockEditProps<DonateButtonAttributes>): JSX.Element => {
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
	 * while remaining able to edit the block in the editor
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
			<DonateButtonEditorControls
				attributes={attributes}
				setAttributes={setAttributes}
			/>
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
				<DonateButtonBlock
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
						onChange={(content) =>
							setAttributes({ buttonText: content })
						} // onChange event callback
						value={attributes.buttonText} // Binding
						placeholder="Donate Now"
					/>
				</DonateButtonBlock>
			</div>
		</>
	);
};

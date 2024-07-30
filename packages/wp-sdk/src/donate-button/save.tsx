/**
 * External dependencies
 */
import clsx from 'clsx';
import { BlockSaveProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { DonateButtonBlock } from './block';
import { DonateButtonAttributes } from './types';
import { useStyleProps } from '../hooks/use-style-props';
import './style.scss';

/**
 * This is the save component for the donate button block, which renders the donate button
 * on the frontend.
 * @param {BlockAttributes} props - The block props
 * @returns {JSX.Element} - The block save component
 */
export const Save = ({
	attributes,
}: BlockSaveProps<DonateButtonAttributes>): JSX.Element => {
	const styleProps = useStyleProps(attributes);
	return (
		<div
			className={clsx('wp-block-button', 'donate-checkout-button', {
				[`align-${attributes.textAlign}`]: attributes.textAlign,
				[`has-custom-width wp-block-button__width-${attributes.width}`]:
					attributes.width,
			})}
		>
			<DonateButtonBlock
				buttonText={attributes.buttonText}
				code={attributes.code}
				className={clsx(styleProps.className, attributes.className)}
				style={styleProps.style}
			>
				{attributes.buttonText}
			</DonateButtonBlock>
		</div>
	);
};

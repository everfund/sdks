/**
 * External dependencies
 */
import clsx from 'clsx';
import * as React from 'react';

/**
 * Internal dependencies
 */
import Block from './block';
import { BlockAttributes } from './types';
import { useStyleProps } from '../hooks/use-style-props';
import './style.scss';

/**
 * This is the save component for the donate button block, which renders the donate button
 * on the frontend.
 * @param {BlockAttributes} props - The block props
 * @returns {JSX.Element} - The block save component
 */
const Save = ({ attributes }: { attributes: BlockAttributes }): JSX.Element => {
	const styleProps = useStyleProps(attributes);
	return (
		<div
			className={clsx('wp-block-button', 'donate-checkout-button', {
				[`align-${attributes.textAlign}`]: attributes.textAlign,
				[`has-custom-width wp-block-button__width-${attributes.width}`]:
					attributes.width,
			})}
		>
			<Block
				buttonText={attributes.buttonText}
				code={attributes.code}
				className={clsx(styleProps.className, attributes.className)}
				style={styleProps.style}
			>
				{attributes.buttonText}
			</Block>
		</div>
	);
};

export default Save;

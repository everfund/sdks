/**
 * External dependencies
 */
import clsx from 'clsx';
import * as React from 'react';

/**
 * Internal dependencies
 */
import { BlockAttributes } from './types';

/**
 * This is the shared component for the donate button block, which renders both
 * in the editor and the frontend.
 * @param {BlockAttributes} props - The block props
 * @returns {JSX.Element} - The block component
 */
export const Block = (
	props: BlockAttributes & { style?: React.CSSProperties }
): JSX.Element => {
	const { className, style, children, code } = props;

	return (
		<button
			className={clsx(
				'wp-block-button__link',
				'wp-element-button',
				'custom-button',
				className
			)}
			style={style}
			data-ef-modal={code}
		>
			{children}
		</button>
	);
};

export default Block;

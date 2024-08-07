/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import { useTypographyProps } from './use-typrography-props';
import {
	getColorClassesAndStyles,
	getBorderClassesAndStyles,
	getSpacingClassesAndStyles,
	WithStyle,
	isObject,
	parseStyle,
} from '../utils';

type blockAttributes = {
	style: Record<string, unknown> | string;
};

type StyleProps = {
	className: string;
	style: Record<string, unknown>;
};

/**
 * Returns the CSS class names and inline styles for a block when provided with its props/attributes.
 *
 * This hook (and its utilities) borrow functionality from the Gutenberg Block Editor package--something we don't want
 * to import on the frontend.
 */
export const useStyleProps = (props: blockAttributes): StyleProps => {
	const propsObject = isObject(props)
		? props
		: {
				style: {},
		  };

	const style = parseStyle(propsObject.style);

	const colorProps = getColorClassesAndStyles({
		...propsObject,
		style,
	} as WithStyle);

	const borderProps = getBorderClassesAndStyles({
		...propsObject,
		style,
	} as WithStyle);

	const spacingProps = getSpacingClassesAndStyles({
		...propsObject,
		style,
	} as WithStyle);

	const typographyProps = useTypographyProps(propsObject);

	return {
		className: clsx(
			typographyProps.className,
			colorProps.className,
			borderProps.className,
			spacingProps.className
		),
		style: {
			...typographyProps.style,
			...colorProps.style,
			...borderProps.style,
			...spacingProps.style,
		},
	};
};

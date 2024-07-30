/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import * as React from 'react';

/**
 * Internal dependencies
 */
import { EverfundIcon } from '../everfund-icon';
import { Edit } from './edit';
import { Save } from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType(metadata.name, {
	...metadata,
	example: {
		attributes: {
			code: '123456',
			domain: 'https://evr.fund',
			height: '600px',
			width: '450px',
		},
	},
	icon: {
		src: <EverfundIcon />,
	},
	edit: Edit,
	save: Save,
});

/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

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
	icon: <EverfundIcon />,
	edit: Edit,
	save: Save,
});

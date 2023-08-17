/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Logo from '../components/logo'
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType(metadata.name, {
  example: {
    attributes: {
      code: '123456',
      domain: 'https://evr.fund',
      height: '600px',
      width: '450px',
    },
  },
  icon: {
    src: (<Logo />),
  },
  /**
   * @see ./edit.js
   */
  edit: Edit,

  /**
   * @see ./save.js
   */
  save,
});

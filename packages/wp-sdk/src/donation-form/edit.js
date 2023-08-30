import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import Logo from '../components/logo';

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <div className="components-placeholder is-large">
        <div class="components-placeholder__label">
          <span class="block-editor-block-icon has-colors">
            <Logo />
          </span>
          Everfund Donation Form
        </div>
        <legend class="components-placeholder__instructions">
          Configure the Everfund Donation Form.
        </legend>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <label style={{ display: 'inline-block', width: '100px' }}>
            Code:
          </label>
          <TextControl
            style={{ width: '300px' }}
            value={attributes.code}
            onChange={(val) => setAttributes({ code: val })}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <label style={{ display: 'inline-block', width: '100px' }}>
            Domain:
          </label>
          <TextControl
            style={{ width: '300px' }}
            value={attributes.domain}
            onChange={(val) => setAttributes({ domain: val })}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <label style={{ display: 'inline-block', width: '100px' }}>
            Height:
          </label>
          <TextControl
            style={{ width: '300px' }}
            value={attributes.height}
            onChange={(val) => setAttributes({ height: val })}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <label style={{ display: 'inline-block', width: '100px' }}>
            Width:
          </label>
          <TextControl
            style={{ width: '300px' }}
            value={attributes.width}
            onChange={(val) => setAttributes({ width: val })}
          />
        </div>
      </div>
    </div>
  );
}

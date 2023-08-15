import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  console.log({ attributes, blockProps });
  return (
    <div {...blockProps}>
      <div className="components-placeholder is-large">
        <div class="components-placeholder__label">
          <span class="block-editor-block-icon has-colors">
            <svg
              viewBox="0 0 750 641.62"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M375.92 641.62c-16.72 0-34.73-8.94-56.69-28.12A308.32 308.32 0 01297 591.86C165.19 467.77 84.29 380 42.45 315.74 3.13 255.34 0 219.91 0 179.88c0-40.54 19.79-85.67 52.94-120.74C88.44 21.6 135 0 180.55 0h.14C317 0 400.82 158.38 404.33 165.13a355 355 0 0049.11 68.15c37.76 40.83 76.41 61.53 114.87 61.53h1.07a116.19 116.19 0 0081.34-33.89 113 113 0 0033.5-80.62A114.68 114.68 0 00569.7 65.78c-30.21 0-65.93 5.58-101.93 46.84a32.89 32.89 0 11-49.57-43.25C472.39 7.21 530.58 0 569.65 0h.06C669.12 0 750 80.9 750 180.29a178.41 178.41 0 01-52.85 127.23A181.65 181.65 0 01570 360.58h-1.7c-134.93.02-218.07-156.87-222.3-165.1a355.8 355.8 0 00-49.09-67.73c-26.24-28.27-67.71-62-116.19-62h-.09c-27.61 0-56.71 14.08-79.85 38.56-21.57 22.81-35 51.75-35 75.54 0 27.43 0 51.13 31.8 100C136 338.94 216.31 425.6 343 544.78c.66.62 1.29 1.26 1.89 1.93 8.61 9.51 20 19.73 27.85 25.41 11.1-9.07 32.4-28.28 67.68-63.51 32.82-32.76 69.88-71.6 90.12-94.44a32.89 32.89 0 0149.23 43.64C560 480.05 519 523.35 478.89 563.08c-21.12 20.89-38.84 37.67-52.69 49.85-25.29 22.25-36.57 28.69-50.28 28.69z"
                fill="#e65f66"
                data-name="Heart"
              ></path>
            </svg>
          </span>
          Everfund Donation Button
        </div>
        <legend class="components-placeholder__instructions">
          Configure the Everfund Donation button.
        </legend>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <label style={{ display: 'inline-block', width: '100px' }}>
            Button Text:
          </label>
          <TextControl
            style={{ width: '300px' }}
            value={attributes.buttonText}
            onChange={(val) => setAttributes({ buttonText: val })}
          />
        </div>
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
      </div>
    </div>
  );
}

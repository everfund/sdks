import { describe, it, expect } from 'vitest';
import { DonationForm } from './DonationForm';
import { render } from '@testing-library/react';
import React from 'react';

describe('DonationForm', () => {
  const code = 'fake-code';

  it('should render with correct src', () => {
    const { container } = render(<DonationForm code={code} />);

    const iframe = container.querySelector('iframe');

    expect(iframe).not.toBeNull();
    expect(iframe?.src).toBe(
      `https://evr.fund/${code}/widget?embed_origin=http://localhost:3000`
    );
  });

  it('should render with correct src with custom domain', () => {
    const { container } = render(
      <DonationForm code={code} domain="https://new.domain" />
    );

    const iframe = container.querySelector('iframe');

    expect(iframe).not.toBeNull();
    expect(iframe?.src).toBe(
      `https://new.domain/${code}/widget?embed_origin=http://localhost:3000`
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<DonationForm code={code} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          style="height: 100%; width: 100%; background-color: white; position: relative;"
        >
          <div
            class="ldsRing go3645027691"
          >
            <div />
            <div />
            <div />
            <div />
          </div>
          <iframe
            id="ef-donationForm"
            src="https://evr.fund/${code}/widget?embed_origin=http://localhost:3000"
            style="margin: 0px; width: 100%; height: 100%;"
          />
        </div>
      </DocumentFragment>
    `);
  });
});

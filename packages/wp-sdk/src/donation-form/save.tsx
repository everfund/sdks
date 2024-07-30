/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import './styles.scss';

/**
 * This is the save component for the donation form block, which renders the donation form
 * on the frontend.
 * @param {BlockAttributes} props - The block props
 * @returns {JSX.Element} - The block save component
 */
export default function Save({ attributes }) {
	const { code, domain, height, width } = attributes;

	// eslint-disable-next-line no-undef
	const origin = window.location.origin;

	return (
		<div style={{ width: width ?? '450px', height: height ?? '600px' }}>
			<div className="everfund-donation-form">
				<div className="everfund-loading-rings">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<iframe
					id="ef-donationForm"
					src={`${
						domain || 'https://evr.fund'
					}/${code}/widget?embed_origin=${origin}`}
					className="iframeStyles"
					allow="payment"
				/>
			</div>
		</div>
	);
}

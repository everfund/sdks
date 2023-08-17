import './styles.scss';

export default function save({ attributes }) {
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
        />
      </div>
    </div>
  );
}

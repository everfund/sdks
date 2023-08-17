export default function save({ attributes }) {
  return (
    <div class="wp-block-button">
      <a class="wp-block-button__Link" data-ef-modal={attributes.code}>
        {attributes.buttonText}
      </a>
    </div>
  );
}

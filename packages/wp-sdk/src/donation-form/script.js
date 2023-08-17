// eslint-disable-next-line no-undef
window.addEventListener(
  'message',
  ({ data }) => {
    const { message } = data ?? {};

    if (!message) {
      return;
    }

    switch (message) {
      case 'everfund:ready': {
        // eslint-disable-next-line no-undef
        const loadingSpinner = document.querySelector(
          '.everfund-loading-rings'
        );
        loadingSpinner?.remove();
        break;
      }
    }
  },
  false
);
/**
 * This is the script that runs on the frontend when the donation form block is rendered.
 * It listens for messages from the iframe and removes the loading spinner when the iframe is ready.
 * @param {MessageEvent} event - The message event
 * @returns {void}
 */
window.addEventListener(
	'message',
	({ data }) => {
		const { message } = data ?? {};

		if (!message) {
			return;
		}

		switch (message) {
			case 'everfund:ready': {
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

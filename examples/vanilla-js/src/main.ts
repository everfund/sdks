import { checkoutModal } from '@everfund/js-sdk';
import '@everfund/example-css';

document?.getElementById('donate-modal')?.addEventListener('click', () => {
  console.log('launch Everfund Modal');
  checkoutModal.modal({
    code: 'j1q16MvJl5lqfji06bVFKei3HZkW',
    onSuccess: function (onSuccessPayload) {
      console.log(onSuccessPayload);
    },
    onFailure: function (error) {
      console.log(error);
    },
    onClose: function () {
      //
      console.log('Closed Modal');
    },
  });
});

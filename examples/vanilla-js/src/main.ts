import everfund from '@everfund/js-sdk'

document?.getElementById('donate-modal')?.addEventListener('click', () => {
  console.log('launch Everfund Modal')
  everfund.donationWidget({
    code: 'rjww',
    domain: 'http://localhost:4000/',
    onSuccess: function (onSuccessPayload) {
      console.log(onSuccessPayload)
    },
    onFailure: function (error) {
      console.log(error)
    },
    onClose: function () {
      //
      console.log('Closed Modal')
    },
  })
})

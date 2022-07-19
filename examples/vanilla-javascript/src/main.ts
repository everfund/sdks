import everfund from "../../../packages/js-sdk/dist"

document?.getElementById("donate-modal")?.addEventListener("click", () => {
  console.log("launch Everfund Modal")
  everfund.donationWidget({
    code: "rjww",
    onSuccess: function (onSuccessPayload) {
      console.log(onSuccessPayload)
    },
    onFailure: function (error) {
      console.log(error)
    },
    onClose: function () {
      //
      console.log("Closed Modal")
    },
  })
})

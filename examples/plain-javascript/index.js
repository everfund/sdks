import everfund from "@everfund/sdk"

document.getElementById("donate-modal").addEventListener("click", () => {
  console.log("launch Everfund Modal")
  everfund.modal({
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

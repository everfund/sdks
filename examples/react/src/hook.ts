import { ModalProps } from "../../../packages/js-sdk/dist/types"
import everfund from "../../../packages/js-sdk"
import { useState } from "react"

export function useDonationWidget(options: ModalProps) {
  // Compose in the generic options to the user options
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
    everfund.donationWidget({
      ...options,
      onSuccess: (data) => {
        setIsShowing(false)
        options.onSuccess(data)
      },
      onFailure: (err) => {
        setIsShowing(false)
        options.onFailure(err)
      },
      onClose: () => {
        setIsShowing(false)
        options.onClose()
      },
    })
  }

  return { isShowing, toggle }
}

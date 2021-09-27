import "core-js/features"
import "core-js/features/array/fill"
import "core-js/features/array/includes"
import "core-js/features/promise"
import elementClosest from "element-closest"
import "element-remove"
import styles from "./modal.module.css"
import { ModalProps } from "./types"

export interface CustomWindow extends Window {
  Everfund: EverfundClient
}

declare let window: CustomWindow

class EverfundClient {
  private modalOpen: boolean = false
  private onSuccess: ModalProps["onSuccess"] = () => {}
  private onFailure: ModalProps["onFailure"] = () => {}
  private onClose: ModalProps["onClose"] = () => {}

  constructor() {
    this.setupButtonListeners()

    elementClosest(window)
  }

  public modal({
    code,
    closeOnSuccess,
    onSuccess,
    onFailure,
    onClose,
  }: ModalProps) {
    this.setupIframeListeners()
    if (onSuccess) this.onSuccess = onSuccess
    if (onFailure) this.onFailure = onFailure
    if (onClose) this.onClose = onClose
    const origin = window.location.origin

    this.disableBodyScroll()

    const modalFrame = document.createElement("iframe")

    let makeQS = function (obj: any) {
      var str = []
      for (var p in obj)
        if (obj[p] && obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
      return str.join("&")
    }

    modalFrame.src = `https://evr.fund/${code}/modal?${makeQS({
      embed_origin: origin,
      embeded: true,
      close_on_success: closeOnSuccess,
    })}`

    // @ts-ignore
    modalFrame.allowPaymentRequest = true
    modalFrame.className = styles.embedIframe

    modalFrame.addEventListener("load", function () {
      const loadingSpinner = document.querySelector<HTMLDivElement>(
        "." + styles.ldsRing
      )
      const modalWrap = document.querySelector<HTMLDivElement>(
        "." + styles.embedModal
      )
      loadingSpinner?.remove()
      modalWrap!.style.transform = "opacity(1)"
    })

    const modalWrap = document.createElement("div")
    modalWrap.className = styles.embedModal
    modalWrap.appendChild(modalFrame)

    const closebutton = document.createElement("button")
    closebutton.className = styles.closeButton

    closebutton.onclick = () => {
      const embed = document.querySelector("." + styles.embedContainer)
      embed && embed.remove()
      Everfund.modalOpen = false
      Everfund.onClose()
      this.enableBodyScroll()
    }

    const loadingSpinner = document.createElement("div")
    loadingSpinner.className = styles.ldsRing
    const div = document.createElement("div")

    Array(4)
      .fill(4)
      .forEach(function () {
        loadingSpinner.appendChild(div)
      })

    const embedContainer = document.createElement("div")
    embedContainer.className = styles.embedContainer
    embedContainer.appendChild(loadingSpinner)
    embedContainer.appendChild(modalWrap)

    document.body.appendChild(embedContainer)
  }

  private enableBodyScroll(): void {
    if (document.readyState === "complete") {
      document.body.style.position = ""
      document.body.style.overflowY = ""
      document.body.style.width = ""

      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10)
        document.body.style.marginTop = ""
        window.scrollTo(window.pageXOffset, scrollTop)
      }
    } else {
      window.addEventListener("load", this.enableBodyScroll)
    }
  }

  private disableBodyScroll({ savePosition = true } = {}): void {
    if (document.readyState === "complete") {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition)
          document.body.style.marginTop = `-${window.pageYOffset}px`
        document.body.style.position = "fixed"
        document.body.style.overflowY = "scroll"
        document.body.style.width = "100%"
      }
    } else {
      window.addEventListener("load", () =>
        this.disableBodyScroll({ savePosition })
      )
    }
  }

  private setupButtonListeners() {
    var head = document.head
    var link = document.createElement("link")

    link.type = "text/css"
    link.rel = "stylesheet"
    link.href = "https://script.everfund.co.uk/m.css"

    head.appendChild(link)

    document.addEventListener(
      "click",
      function (e: MouseEvent) {
        const match = (e.target as HTMLElement).closest("[data-ef-modal]")

        if (!match || Everfund.modalOpen) return
        e.preventDefault()
        e.stopPropagation()

        let code = match.getAttribute("data-ef-modal")

        if (!code) {
          console.error(
            'Everfund: data-ef-modal is required! eg <button data-ef-modal="demo"> modal </button>'
          )
          return
        }

        if (
          !!new RegExp(
            "^(https?:\\/\\/)?" + // protocol
              "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
              "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
              "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
              "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
              "(\\#[-a-z\\d_]*)?$",
            "i"
          ).test(code)
        ) {
          console.warn(
            `Everfund: url's are deprecated please use a code instead`
          )

          code = new URL(code).pathname.replace("/", "")
        }

        Everfund.modalOpen = true
        Everfund.modal({
          code,
          onSuccess: () => {},
          onFailure: () => {},
          onClose: () => {},
        })
      },
      false
    )
  }

  private setupIframeListeners() {
    window.addEventListener(
      "message",
      function (e) {
        switch (e.data.message) {
          case "everfund:ready":
            const loadingSpinner = document.querySelector<HTMLDivElement>(
              "." + styles.ldsRing
            )
            const modalWrap = document.querySelector<HTMLDivElement>(
              "." + styles.embedModal
            )
            loadingSpinner?.remove()
            modalWrap!.style.transform = "opacity(1)"
            break
          case "everfund:success":
            const data = e.data.content
            Everfund.onSuccess(data)
            break
          case "everfund:failure":
            Everfund.onFailure(e.data.content)
            break
          case "everfund:close":
            const embed = document.querySelector("." + styles.embedContainer)
            embed && embed.remove()
            Everfund.modalOpen = false
            Everfund.onClose()
            break
        }
      },
      false
    )
  }
}

const Everfund = new EverfundClient()

export default Everfund

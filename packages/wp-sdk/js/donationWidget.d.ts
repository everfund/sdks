import "core-js/features/array/includes";
import "core-js/features/array/fill";
import { ModalProps } from "./types";
import "core-js/features/promise";
import "core-js/features";
import "element-remove";
export interface CustomWindow extends Window {
    Everfund: EverfundClient;
}
declare class EverfundClient {
    private donationWidgetOpen;
    private onSuccess;
    private onFailure;
    private onClose;
    version: string;
    constructor();
    modal({ code, domain, closeOnSuccess, onSuccess, onFailure, onClose, }: ModalProps): void;
    donationWidget({ code, domain, closeOnSuccess, onSuccess, onFailure, onClose, }: ModalProps): void;
    private setupButtonListeners;
    private setupIframeListeners;
}
declare const Everfund: EverfundClient;
export default Everfund;

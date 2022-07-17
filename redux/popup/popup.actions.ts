import { PopupActionTypes } from './popup.types';

export const togglePopup = (caption:string, url: string, alt:string) =>
({
    type: PopupActionTypes.TOGGLE_POPUP,
    payload : {caption,url,alt}
});


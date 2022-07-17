import { PopupActionTypes } from './popup.types';

const INITIAL_STATE =
{
    hidden: true,
    caption: '',
    url: '',
    alt: ''
};

export const popupReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case PopupActionTypes.TOGGLE_POPUP:
            return {
                ...state,
                hidden: !state.hidden,
                caption: action.payload.caption,
                url: action.payload.url,
                alt: action.payload.alt
            }
        default:
            return state;
    }
}

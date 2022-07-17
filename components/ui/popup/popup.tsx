import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from 'redux/popup/popup.actions';


const Popup = () => {
    const dispatch = useDispatch();

    const caption = useSelector(((state: any) => state.popup.caption));
    const url = useSelector(((state: any) => state.popup.url));
    const alt = useSelector(((state: any) => state.popup.alt))

    return (
        <div className='fixed w-full h-[20rem] bg-red-400 z-[999]'>
            <span onClick={() => { dispatch(togglePopup('', '', '')) }}>close</span>
            {caption}
        </div>
    )
};

export default Popup;

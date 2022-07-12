import React, { ReactNode, useState, useEffect } from 'react';
import cn from 'classnames';
interface ModalProps {
    children: ReactNode;
    visible: boolean;
    onClose?: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, visible }) => {
    const [visibleModal, setvisibleModal] = useState(visible);
    useEffect(() => {
    setvisibleModal(visible)
    }, [visible])

    return (
        <div
            onClick={()=> setvisibleModal(false)}
            className={cn('w-[30rem] h-[10rem] bg-gold absolute', !visibleModal ? "hidden" : "flex")}>
            {visible && (
                <div
                    onClick={onClose}
                    className="bg-black opacity-25 right-0 left-0 top-0 bottom-0 z-20 w-screen h-screen fixed"
                ></div>
            )}
            <div
                className={cn(
                    'w-full absolute left-0  top-0  flex justify-center items-center',
                    visible && 'h-screen',
                )}
            >
                {visible && <div className=" fixed animate-opacity z-50 ">{children}</div>}
            </div>
        </div>
    );
};

export default Modal;

import React, { createContext, useState } from "react";

interface IModalContex {
    modal: boolean,
    open: () => void;
    close: () => void;
}

export const ModalContext = createContext<IModalContex>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {

    const [modal, setModal] = useState(false);
    const open = () => setModal(true);
    const close = () => setModal(false);

    return (
        <ModalContext.Provider value={{ open, close, modal }}>
            { children }
        </ModalContext.Provider>
    )
}
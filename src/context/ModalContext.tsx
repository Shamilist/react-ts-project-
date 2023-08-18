import { createContext } from "react";

interface IModalContex {
    modal: boolean,
    open: () => void;
    close: () => void;
}

createContext<IModalContex>({})
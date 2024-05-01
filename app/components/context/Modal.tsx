"use client";
import React, { createContext, useState } from "react";

const useModalState = (initialModalOpened: boolean) => useState<boolean>(initialModalOpened);

export const ModalContext = createContext<ReturnType<
    typeof useModalState
> | null>(null);

export const useModal = () => {
    const modalOpened = React.useContext(ModalContext);
    if (!modalOpened) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return modalOpened;
};

const ModalProvider = ({
    modalOpened: initialModalOpened,
    children,
}: {
    modalOpened: boolean;
    children: React.ReactNode;
}) => {
    const [modalOpened, setModalOpened] = useModalState(initialModalOpened);

    return (
        <ModalContext.Provider value={[modalOpened, setModalOpened]}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
"use client";
import React, { createContext, useState } from "react";
import { type User } from "@/app/lib/definitions";

const useUserState = (initialUser: User) => useState<User>(initialUser);

export const UserContext = createContext<ReturnType<
    typeof useUserState
> | null>(null);

export const useUser = () => {
    const user = React.useContext(UserContext);
    if (!user) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return user;
};

const UserProvider = ({
    user: initialUser,
    children,
}: {
    user: User;
    children: React.ReactNode;
}) => {
    const [user, setUser] = useUserState(initialUser);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
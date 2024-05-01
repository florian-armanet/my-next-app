"use client";
import React, { createContext, useState } from "react";

const useSearchState = (initialSearchValue: string) => useState<string>(initialSearchValue);

export const SearchContext = createContext<ReturnType<
    typeof useSearchState
> | null>(null);

export const useSearch = () => {
    const searchValue = React.useContext(SearchContext);
    if (!searchValue) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return searchValue;
};

const SearchProvider = ({
    searchValue: initialSearchValue,
    children,
}: {
    searchValue: string;
    children: React.ReactNode;
}) => {
    const [searchValue, setSearchValue] = useSearchState(initialSearchValue);

    return (
        <SearchContext.Provider value={[searchValue, setSearchValue]}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
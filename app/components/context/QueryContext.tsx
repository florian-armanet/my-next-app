"use client";
import React, { createContext, useState } from "react";

const useQueryState = (initialQuery: string) => useState<string>(initialQuery);

export const QueryContext = createContext<ReturnType<
    typeof useQueryState
> | null>(null);

export const useQuery = () => {
    const query = React.useContext(QueryContext);
    if (!query) {
        throw new Error("useQuery must be used within a QueryProvider");
    }
    return query;
};

const QueryProvider = ({
    query: initialQuery,
    children,
}: {
    query: string;
    children: React.ReactNode;
}) => {
    const [query, setQuery] = useQueryState(initialQuery);

    return (
        <QueryContext.Provider value={[query, setQuery]}>
            {children}
        </QueryContext.Provider>
    );
};

export default QueryProvider;
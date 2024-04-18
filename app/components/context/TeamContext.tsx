"use client";
import { Team } from "@/app/lib/definitions";
import React, { createContext, useState } from "react";

const useTeamState = (initialTeam: Team) => useState<Team>(initialTeam);

export const TeamContext = createContext<ReturnType<
    typeof useTeamState
> | null>(null);

export const useTeam = () => {
    const team = React.useContext(TeamContext);
    if (!team) {
        throw new Error("useTeam must be used within a TeamProvider");
    }
    return team;
};

const TeamProvider = ({
    team: initialTeam,
    children,
}: {
    team: Team;
    children: React.ReactNode;
}) => {
    const [team, setTeam] = useTeamState(initialTeam);

    return (
        <TeamContext.Provider value={[team, setTeam]}>
            {children}
        </TeamContext.Provider>
    );
};

export default TeamProvider;
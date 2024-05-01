import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import UserProvider from "./components/context/UserContext";
import TeamProvider from "./components/context/TeamContext";
import { getUser, getPokemonByPokedexId } from "./lib/data";
import { Team as TypeTeam } from "./lib/definitions";
import { _MAIL_TMP } from "./lib/constants";
import Team from "./components/Team";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Démo d'une application avec Next.js",
    description: "Application développé avec Next.js permettant de créer son équipe Pokémon avec 6 pokémons",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser(_MAIL_TMP)
    const idsOfTeam = user.team ? user.team.split(',').map(id => Number(id)) : []

    const team = idsOfTeam.length ?
        await Promise.all([...idsOfTeam.map(idsOfTeam => getPokemonByPokedexId(idsOfTeam)).filter(p => p)]) as TypeTeam
        :
        []

    return (
        <html lang="fr">
            <body className={inter.className} suppressHydrationWarning={true}>
                <UserProvider user={user}>
                    <TeamProvider team={team}>
                        <Team />
                        {children}
                    </TeamProvider>
                </UserProvider>
            </body>
        </html>
    );
}

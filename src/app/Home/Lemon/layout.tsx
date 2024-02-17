import { ReactNode } from "react";

type childrenType=Readonly<{
    children:ReactNode;
}> 
export default function RootLayout({
    children,
}:childrenType){
    return (
        <>
            <h1 className="bg-emerald-700 pl-7  text-2xl">Lemon</h1>
            {children}
        </>
    )
}

import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1 className="bg-blue-400 text-3xl">Inner </h1>
            {children}
        </>
    );
}

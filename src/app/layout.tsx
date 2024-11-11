import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Footer} from "@/app/components/footer";
import React from "react";
import {Navbar} from "@/app/components/navbar";


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Dean Lynch - Portfolio",
    description: "Personal portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
        <body
            className={`${geistSans.variable} ${geistMono.variable} bg-base-100 text-base-content antialiased`}
        >
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}

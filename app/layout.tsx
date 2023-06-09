import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";

import React from "react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import SessionProvider from "@/components/SessionProvider";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
export const metadata = {
  title: "Chat Gpt",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* SideBar  */}
              <SideBar />
              <ClientProvider />
              <div className="bg-[#343541]  flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

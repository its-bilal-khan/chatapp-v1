import 'styles/globals.scss';

import React from 'react';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whatsapp web",
  description:
    "Learning best way of managing a project and also learning updates in react, next js, typescript, tailwind etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-[#111b21] text-white'>{children}</body>
    </html>
  );
}

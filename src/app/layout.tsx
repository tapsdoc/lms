import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import ToastProvider from '@/lib/toast-provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Learn',
		default: 'Welcome'
	},
	icons: {
		icon: '/logoipsum-245.svg'
	},
	description: 'The official Next.js Learn App built with App Router.',
	metadataBase: new URL('https://learn.vercel.app')
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			
			<html lang="en">
				<body className={ inter.className }>
					<ToastProvider />
					<main>
						{ children }
					</main>
				</body>
			</html>
		</ClerkProvider>
	
	);
}

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.scss';

const noto_Sans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={noto_Sans.className}>{children}</body>
		</html>
	);
}

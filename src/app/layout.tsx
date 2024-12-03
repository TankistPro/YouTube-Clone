import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import Layout from '@/components/layout/Layout';

import { Providers } from '@/providers/Providers';

import './globals.scss';

const noto_Sans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'YouTube-Clone',
	description: 'TouTube-Clone App for video watching'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={noto_Sans.className}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}

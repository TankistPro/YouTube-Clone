import type { Metadata } from 'next';

import { PAGE } from '@/config/public-page.config';

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending...',
	alternates: {
		canonical: PAGE.EXPLORE
	},
	openGraph: {
		type: 'website'
	}
};

export default function TrendingPage() {
	return <div>TrendingPage</div>;
}

import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { Explore } from './explore/Explore';
import { videoService } from '@/services/video.service';

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
	title: 'Explore',
	description: 'Explore...',
	alternates: {
		canonical: PAGE.EXPLORE
	},
	openGraph: {
		type: 'website'
	}
};

export default async function Home() {
	const { data } = await videoService.getTrendingVideos();
	const trendingVideos = data;

	return (
		<section className='flex flex-col gap-5'>
			{!!trendingVideos.length && (
				<section>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid grid-cols-6 gap-6'>
						{trendingVideos.map(video => (
							<VideoItem
								video={video}
								key={video.id}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}

			<Explore />
		</section>
	);
}

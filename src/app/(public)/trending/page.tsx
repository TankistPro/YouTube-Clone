import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { videoService } from '@/services/video.service';

export const revalidate = 100;
export const dynamic = 'force-static';

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

export default async function TrendingPage() {
	const { data } = await videoService.getTrendingVideos();
	const videos = data;

	return (
		<section className='flex flex-col gap-5'>
			<section>
				<Heading Icon={Flame}>Trending</Heading>
				<div className='grid-6-cols'>
					{!!videos.length &&
						videos.map(video => (
							<VideoItem
								video={video}
								key={video.id}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
		</section>
	);
}

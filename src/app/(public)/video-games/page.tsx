import { Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { videoService } from '@/services/video.service';

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
	title: 'Video Games',
	description: 'Video Games...',
	alternates: {
		canonical: PAGE.VIDEO_GAME
	},
	openGraph: {
		type: 'website'
	}
};

export default async function VideoGamesPage() {
	const { data } = await videoService.getVideoGames();
	const videos = data;

	return (
		<section className='flex flex-col gap-5'>
			<section>
				<Heading Icon={Gamepad2}>Video Games</Heading>
				<div className='grid-6-cols'>
					{!!videos.videos.length &&
						videos.videos.map(video => (
							<VideoItem
								video={video}
								key={video.id}
							/>
						))}
				</div>
			</section>
		</section>
	);
}

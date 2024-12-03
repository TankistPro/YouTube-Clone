import { Flame } from 'lucide-react';

import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { Explore } from './explore/Explore';
import { videoService } from '@/services/video.service';

export const revalidate = 100;
export const dynamic = 'force-static';

export default async function Home() {
	const { data } = await videoService.getTrendingVideos();
	const trendingVideos = data;
	return (
		<section>
			<section>
				<h2>Trending</h2>
				<div className='grid grid-cols-6 gap-6'>
					{trendingVideos.length &&
						trendingVideos.map(video => (
							<VideoItem
								video={video}
								key={video.id}
								Icon={Flame}
							/>
						))}
				</div>
			</section>

			<Explore />
		</section>
	);
}

'use client';

import { useQuery } from '@tanstack/react-query';
import { Flame } from 'lucide-react';

import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { videoService } from '@/services/video.service';

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	});

	return (
		<div className='grid grid-cols-6 gap-6'>
			{isLoading
				? 'Loading'
				: data?.data.totalCount &&
					data.data.videos.map(video => (
						<VideoItem
							video={video}
							key={video.id}
							Icon={Flame}
						/>
					))}
		</div>
	);
}

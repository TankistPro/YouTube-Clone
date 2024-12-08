'use client';

import { useQuery } from '@tanstack/react-query';
import { Compass } from 'lucide-react';

import { Heading } from '@/ui/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { videoService } from '@/services/video.service';

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	});
	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-44 rounded-md'
					/>
				) : (
					data?.data.totalCount &&
					data.data.videos.map(video => (
						<VideoItem
							video={video}
							key={video.id}
						/>
					))
				)}
			</div>
		</section>
	);
}

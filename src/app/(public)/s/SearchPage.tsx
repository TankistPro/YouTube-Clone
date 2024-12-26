'use client';

import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Heading } from '@/ui/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { VideoItem } from '@/ui/VideoItem/VideoItem';

import { videoService } from '@/services/video.service';

export default function SearchPage() {
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('term');

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getAll(searchTerm)
	});

	return (
		<section>
			<Heading
				isH1
				Icon={Search}
			>
				Search by &quot;{searchTerm}&quot;
			</Heading>
			<div className='grid-6-cols'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-44 rounded-md'
					/>
				) : data?.data.totalCount ? (
					data.data.videos.map(video => (
						<VideoItem
							video={video}
							key={video.id}
						/>
					))
				) : (
					<p>Videos not found</p>
				)}
			</div>
		</section>
	);
}

import axios from 'axios';

import type { IPaginateVideos, IVideo } from '@/types/video.types';

class VideoService {
	getExploreVideos() {
		return axios.get<IPaginateVideos>('http://localhost:4200/api/videos/explore');
	}

	getTrendingVideos() {
		return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending');
	}
}

export const videoService = new VideoService();

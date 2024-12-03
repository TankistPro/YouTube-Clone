import axios from 'axios';

import type { IPaginateVideos } from '@/types/video.types';

class VideoService {
	getExploreVideos() {
		return axios.get<IPaginateVideos>('http://localhost:4200/api/videos/explore');
	}
}

export const videoService = new VideoService();

import { axiosClassic } from '@/api/axios';

import type { IPaginateVideos, IVideo } from '@/types/video.types';

class VideoService {
	private _VIDEOS = '/videos';

	getExploreVideos() {
		return axiosClassic.get<IPaginateVideos>(`${this._VIDEOS}/explore`);
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`);
	}

	getVideoGames() {
		return axiosClassic.get<IPaginateVideos>(`${this._VIDEOS}/games`);
	}

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<IPaginateVideos>(`${this._VIDEOS}`, searchTerm ? { params: { searchTerm } } : {});
	}
}

export const videoService = new VideoService();

import type { IUser } from './user.type';
import type { IVideo } from './video.types';

export interface IWatchHistory {
	id: string;
	watchedAt: string;
	user: IUser;
	video: IVideo;
}

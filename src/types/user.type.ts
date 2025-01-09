import type { IChannel } from './channel.type';
import type { IWatchHistory } from './history.type';

export interface IUser {
	createdAt: string;
	email: string;
	id: string;
	name?: string;
	password: string;
	updatedAt: string;
	verificationToken: string;
}

export interface IFullUser extends IUser {
	channel?: IChannel;
	subscriptions: IChannel[];
	watchHistory: IWatchHistory;
}

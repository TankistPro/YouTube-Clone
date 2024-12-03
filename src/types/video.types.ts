import type { IChannel } from './channel.type';

export interface IVideo {
	id: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	videoFileName: string;
	maxResolution: string;
	viewsCount: number;
	isPublic: boolean;
	channel: IChannel;
	// channelId;
	// likes;
	// comments;
	createdAt: string;
}

export interface IPaginateVideos {
	limit: number;
	page: number;
	totalCount: number;
	totalPages: number;
	videos: IVideo[];
}

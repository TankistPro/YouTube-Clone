import {
	CircleAlert,
	CirclePlay,
	Compass,
	Flame,
	FolderHeart,
	Gamepad2,
	History,
	Settings,
	TvMinimalPlay
} from 'lucide-react';

import { PAGE } from '@/config/public-page.config';

import type { ISideBarItem } from './sidebar.types';

export const SIDEBAR_DATA: ISideBarItem[] = [
	{
		icon: Compass,
		label: 'Explore',
		link: PAGE.EXPLORE
	},
	{
		icon: Flame,
		label: 'Trending',
		link: PAGE.TRENDING
	},
	{
		icon: Gamepad2,
		label: 'Video games',
		link: PAGE.VIDEO_GAME,
		isBottomBorder: true
	},
	{
		icon: TvMinimalPlay,
		label: 'My channel',
		link: PAGE.MY_CHANNEL
	},
	{
		icon: CirclePlay,
		label: 'Subscription',
		link: PAGE.SUBSCRIPTION
	},
	{
		icon: History,
		label: 'History',
		link: PAGE.HISTORY
	},
	{
		icon: FolderHeart,
		label: 'Liked videos',
		link: PAGE.LIKED_VIDEO,
		isBottomBorder: true
	}
];

export const MORE_SIDEBAR_DATA: ISideBarItem[] = [
	{
		icon: Settings,
		label: 'Settings',
		link: PAGE.SETTINGS
	},
	{
		icon: CircleAlert,
		label: 'Send feedback',
		link: PAGE.FEEDBACK
	}
];

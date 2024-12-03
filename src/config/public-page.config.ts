class PublicPage {
	EXPLORE = '/';
	TRENDING = '/trending';
	VIDEO_GAME = '/vide_games';

	SEARCH = '/search';

	MY_CHANNEL = '/my-channel';
	SUBSCRIPTION = '/subscription';
	HISTORY = '/history';
	LIKED_VIDEO = '/liked-video';

	SETTINGS = '/settings';
	FEEDBACK = '/feedback';

	VIDEO(path: string) {
		return `/v/${path}`;
	}

	CHANNEL(path: string) {
		return `/c/${path}`;
	}
}

export const PAGE = new PublicPage();

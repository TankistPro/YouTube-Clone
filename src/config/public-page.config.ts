class PublicPage {
	EXPLORE = '/';
	TRENDING = '/trending';
	VIDEO_GAME = '/vide_games';

	MY_CHANNEL = '/my-channel';
	SUBSCRIPTION = '/subscription';
	HISTORY = '/history';
	LIKED_VIDEO = '/liked-video';

	FEEDBACK = '/feedback';

	VIDEO(path: string) {
		return `/v/${path}`;
	}

	CHANNEL(path: string) {
		return `/c/${path}`;
	}

	SEARCH(searchTerm: string) {
		return `/s?term=${searchTerm}`;
	}
}

export const PAGE = new PublicPage();

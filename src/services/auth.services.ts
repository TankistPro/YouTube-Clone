import Cookies from 'js-cookie';

import { clearAuthData, setAuthData } from '@/store/auth.slice';

import { axiosClassic } from '@/api/axios';

import type { IAuthData } from '@/app/auth/auth-form.types';
import { store } from '@/store';
import { EnumTokens } from '@/types/auth.type';
import type { IUser } from '@/types/user.type';

interface IAuthResponse {
	user: IUser;
	accessToken: string;
}

class AuthService {
	private _AUTH = '/auth';

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		});

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken);
			store.dispatch(setAuthData(response.data));
		}

		return response;
	}

	// Client Side
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`);

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken);
		}

		return response;
	}

	// Server side
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		);

		return response.data;
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`);

		if (response.data) {
			this._removeFromStorage();
			store.dispatch(clearAuthData());
		}

		return response;
	}

	private _saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1
		});
	}

	private _removeFromStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN);
	}
}

export const authService = new AuthService();

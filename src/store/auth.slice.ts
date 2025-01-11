import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { EnumTokens } from '@/types/auth.type';
import type { IUser } from '@/types/user.type';

interface IAuthState {
	user: IUser | null;
	accessToken: string | null;
	isLoggedIn: boolean;
}

const initialState: IAuthState = {
	user: null,
	isLoggedIn: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
	accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<{ user: IUser; accessToken: string }>) {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.isLoggedIn = true;
		},
		clearAuthData(state) {
			state.user = null;
			state.accessToken = null;
			state.isLoggedIn = false;
		}
	}
});

export const { setAuthData, clearAuthData } = authSlice.actions;

'use server';

import { AxiosError } from 'axios';
import { jwtVerify } from 'jose';

interface ITokenVerifyPayload {
	id: string;
	iat: number;
	exp: number;
}

export async function jwtVerifyServer(accessToken: string) {
	try {
		const { payload }: { payload: ITokenVerifyPayload } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(process.env.JWT_SECRET)
		);

		return payload;
	} catch (error) {
		if (error instanceof AxiosError && error.code === 'ERR_JWT_EXPIRED') {
			console.log('Токен истек');
			return null;
		}

		console.log('Ошибка при верификации токена', error);
		return null;
	}
}

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { Logo } from '@/components/layout/sidebar/header/Logo';

import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { Button } from '@/ui/button/Button';
import { Field } from '@/ui/field/Field';

import { PAGE } from '@/config/public-page.config';

import type { IAuthForm } from './auth-form.types';
import { useAuthForm } from './useAuthForm';
import { useAppSelector } from '@/store';

export function Auth() {
	const [isLogin, setIsLogin] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	});

	const passwordWatch = watch('password');

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset);

	const accessToken = useAppSelector(state => state.auth.accessToken);
	const router = useRouter();

	useEffect(() => {
		if (!accessToken) return;
		router.push(PAGE.EXPLORE);
	}, [accessToken, router]);

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-1/5 p-layout border-border border rounded'>
				<div className='flex justify-center pb-4'>
					<Logo />
				</div>

				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(false)}
					>
						Registration
					</button>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center'
				>
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
							<Field
								label='Email'
								type='email'
								autoComplete='off'
								registration={register('email', { required: 'Email is required' })}
								error={errors.email?.message}
								placeholder='Enter email:'
							/>
							<Field
								label='Password'
								type='password'
								registration={register('password', { required: 'Password is required' })}
								error={errors.password?.message}
								placeholder='Enter password:'
							/>
							{!isLogin && (
								<Field
									label='Password confirmation'
									type='password'
									registration={register('confirmPassword', {
										required: 'Password is required',
										validate: value => value === passwordWatch || "Passwords don't match"
									})}
									error={errors.confirmPassword?.message}
									placeholder='Repeat password:'
								/>
							)}
						</>
					)}

					<ReCAPTCHA
						ref={recaptchaRef}
						size='normal'
						theme='dark'
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					/>
					<div className='text-center mt-6'>
						<Button
							type='submit'
							isLoading={isLoading}
						>
							{isLogin ? 'Login' : 'Registration'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

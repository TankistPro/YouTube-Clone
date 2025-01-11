import { LogInIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { LinkButton } from '@/ui/button/LinkButton';

import { PAGE } from '@/config/public-page.config';
import { STUDIO_PAGE } from '@/config/studio-page.config';

import { useAppSelector } from '@/store';

export function HeaderProfile() {
	const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
	return isLoggedIn ? (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src={'/uploads/avatars/redgroup.jpg'}
				alt='avatar'
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	) : (
		<LinkButton href={PAGE.AUTH}>
			<LogInIcon size={20} />
			Log In
		</LinkButton>
	);
}

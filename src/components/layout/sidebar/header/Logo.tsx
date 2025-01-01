import { SquarePlay } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/color.constant';

import { PAGE } from '@/config/public-page.config';

export function Logo() {
	return (
		<Link
			href={PAGE.EXPLORE}
			className='flex gap-1.5 items-center'
		>
			<SquarePlay
				color={COLORS.primary}
				size={28}
			/>
			<span className='font-semibold'>YouTub Video</span>
		</Link>
	);
}

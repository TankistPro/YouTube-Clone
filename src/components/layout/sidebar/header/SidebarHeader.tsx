import { Menu, SquarePlay } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/color.constant';

import { PUBLIC_PAGE } from '@/config/public-page.config';

const SidebarHeader = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
	return (
		<div className='flex gap-6 items-center mb-12'>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>
			<Link
				href={PUBLIC_PAGE.EXPLORE}
				className='flex gap-1.5 items-center'
			>
				<SquarePlay
					color={COLORS.primary}
					size={28}
				/>
				<span className='font-semibold'>YouTub Video</span>
			</Link>
		</div>
	);
};

export default SidebarHeader;

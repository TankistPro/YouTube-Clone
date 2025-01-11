import dynamic from 'next/dynamic';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { HeaderLinks } from './HeaderLinks';
import { SearchField } from './SearchField';

const HeaderProfileLazy = dynamic(async () => (await import('./profile/HeaderProfile')).HeaderProfile, {
	ssr: false,
	loading: () => <SkeletonLoader className='w-[40px] rounded-xl mb-0' />
});

function Header() {
	return (
		<header className='p-layout border-b border-border flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-7'>
				<HeaderLinks />
				<HeaderProfileLazy />
			</div>
		</header>
	);
}

export default Header;

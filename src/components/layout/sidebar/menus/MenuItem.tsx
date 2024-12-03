import cn from 'clsx';
import Link from 'next/link';

import type { ISideBarItem } from '../sidebar.types';

interface Props {
	item: ISideBarItem;
	isActive: boolean;
}

const MenuItem = ({ item, isActive }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={'py-2 flex items-center gap-6 group'}
			>
				<item.icon
					className={cn('min-w-[24px] ', {
						'group-hover:text-primary transition group-hover:rotate-6': !isActive
					})}
				/>
				<span
					className={cn('border-b', {
						'border-white': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block' />}
		</li>
	);
};

export default MenuItem;

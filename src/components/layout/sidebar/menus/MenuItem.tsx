import Link from 'next/link';

import type { ISideBarItem } from '../sidebar.types';

interface Props {
	item: ISideBarItem;
}

const MenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={'py-2 flex items-center gap-6 group'}
			>
				<item.icon className='min-w-[24px] group-hover:text-primary transition group-hover:rotate-3' />
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block' />}
		</li>
	);
};

export default MenuItem;

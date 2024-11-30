import Link from 'next/link';

import type { ISideBarItem } from '../sidebar.types';

interface Props {
	item: ISideBarItem;
}

const MenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link href={item.link}>
				<item.icon />
				<span>{item.label}</span>
			</Link>
		</li>
	);
};

export default MenuItem;

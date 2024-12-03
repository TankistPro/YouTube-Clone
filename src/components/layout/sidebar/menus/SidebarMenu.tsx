import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';

import type { ISideBarItem } from '../sidebar.types';

import MenuItem from './MenuItem';

interface Props {
	title?: string;
	menu: ISideBarItem[];
}

const SidebarMenu = ({ menu, title }: Props) => {
	const pathname = usePathname();

	return (
		<nav>
			{title && <div className='opacity-30 uppercase text-xs mb-3 transition-all'>{title}</div>}

			<ul>
				{menu.map(menuItem => (
					<MenuItem
						item={menuItem}
						key={menuItem.label}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	);
};

export default SidebarMenu;

import type { ISideBarItem } from '../sidebar.types';

import MenuItem from './MenuItem';

interface Props {
	title?: string;
	menu: ISideBarItem[];
}

const SidebarMenu = ({ menu, title }: Props) => {
	return (
		<nav>
			{title && <div>{title}</div>}

			<ul>
				{menu.map(menuItem => (
					<MenuItem
						item={menuItem}
						key={menuItem.label}
					/>
				))}
			</ul>
		</nav>
	);
};

export default SidebarMenu;

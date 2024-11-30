import SidebarHeader from './header/SidebarHeader';
import SidebarMenu from './menus/SidebarMenu';
import SidebarSubscriptions from './menus/SidebarSubscriptions';
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data';

const Sidebar = () => {
	return (
		<aside>
			<SidebarHeader />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu menu={MORE_SIDEBAR_DATA} />
		</aside>
	);
};

export default Sidebar;

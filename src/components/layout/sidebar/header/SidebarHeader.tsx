import { Menu, SquarePlay } from 'lucide-react';

const SidebarHeader = () => {
	return (
		<div>
			<button>
				<Menu />
			</button>
			<span>
				<SquarePlay />
				<span>YouTub Video</span>
			</span>
		</div>
	);
};

export default SidebarHeader;

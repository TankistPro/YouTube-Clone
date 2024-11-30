import type { PropsWithChildren } from 'react';

import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	);
}

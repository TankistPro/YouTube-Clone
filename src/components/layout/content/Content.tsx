import type { PropsWithChildren } from 'react';

import Header from '../header/Header';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	);
}

import { useRouter } from 'next/navigation';
import { type KeyboardEvent, useState } from 'react';

import { PAGE } from '@/config/public-page.config';

export function SearchField() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	const handlerKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;
		event.preventDefault();

		if (searchTerm.trim().length) router.push(PAGE.SEARCH(encodeURIComponent(searchTerm)));
	};

	return (
		<div className='w-2/3'>
			<input
				type='search'
				placeholder='Type to search'
				className='p-2 w-1/2 bg-transparent outline-none border-none shadow-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handlerKeyDown}
			/>
		</div>
	);
}

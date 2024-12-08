import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	Icon?: LucideIcon;
}

export function Heading({ children, Icon }: Props) {
	return (
		<div className='flex items-center gap-1.5 mb-3 opacity-90'>
			{Icon && <Icon className='text-primary' />}
			<h2 className='font-semibold text-lg'>{children}</h2>
		</div>
	);
}

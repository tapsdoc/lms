'use client'

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	href: string;
}
const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const isActive = (pathname === '/' && href === '/') || pathname === href || pathname.startsWith(`${href}/`);
	
	const handleClick = () => {
		router.push(href);
	}
	
	return (
		<button
			onClick={handleClick}
			className={clsx(
				'flex items-center gap-x-2 text-slate-500 text-sm font[500px] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
				isActive && 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700'
			)}>
			<div className="flex items-center gap-x-2 py-4">
				<Icon
					size={22}
					className={clsx(
						'text-slate-500',
						isActive && 'text-sky-700'
					)}
				/>
				{ label }
			</div>
			<div className={clsx(
				'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all',
				isActive && 'opacity-100'
			)}></div>
		</button>
	);
};

export default SidebarItem;
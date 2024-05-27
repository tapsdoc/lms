import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode}) => {
	return (
		<div className="h-full">
			<div className="h-[80px] md:pl-56 inset-y-0 w-full z-50">
				<Navbar />
			</div>
			<div className="h-full hidden md:flex flex-col w-56 inset-y-0 fixed z-50">
				<Sidebar />
			</div>
			<div className="md:pl-56 pt[80px] h-full">
				{ children }
			</div>
		</div>
	);
};

export default DashboardLayout;
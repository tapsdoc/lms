import React from 'react';
import Image from 'next/image';

const Logo = () => {
	return (
		<Image
			src="/logoipsum-245.svg"
			alt="logo"
			height={50}
			width={50}
		/>
	)
};

export default Logo;
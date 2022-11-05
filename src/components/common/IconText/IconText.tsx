import React from 'react';
import { Image, Space } from 'antd';

type IconTextProps = {
	icon: string;
	textElement: React.ReactNode;
	gap?: number;
	iconSize?: number;
};

export const IconText: React.FC<IconTextProps> = ({ icon, textElement, iconSize, gap }) => {
	return (
		<Space direction="horizontal" align="center" size={gap ?? 10}>
			<Image src={icon} preview={false} width={iconSize} height={iconSize} />
			{textElement}
		</Space>
	);
};

import React from 'react';
import { Tag as AntdTag } from 'antd';
import { hexToRGB, lightenDarkenColor } from './utils';

type TagProps = {
	color: string;
	text: string;
};

export const Tag: React.FC<TagProps> = ({ text, color }) => {
	return (
		<AntdTag
			color={hexToRGB(color, 0.15)}
			style={{
				color: lightenDarkenColor(color, -16),
				border: `1px solid ${hexToRGB(color, 0.5)}`,
				margin: 0,
			}}
		>
			{text}
		</AntdTag>
	);
};

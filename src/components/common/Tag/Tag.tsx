import React from 'react';
import { Tag as AntdTag, Tooltip } from 'antd';
import { hexToRGB, lightenDarkenColor } from './utils';
import s from './Tag.module.scss';

type TagProps = {
	color: string;
	text: string;
	shouldShowTooltip?: boolean;
	tooltipText?: string;
};

export const Tag: React.FC<TagProps> = ({ text, color, shouldShowTooltip, tooltipText }) => {
	return (
		<Tooltip title={shouldShowTooltip ? tooltipText : ''} className={s.track__tag}>
			<AntdTag
				color={hexToRGB(color, 0.15)}
				style={{
					color: lightenDarkenColor(color, -16),
					border: `1px solid ${hexToRGB(color, 0.5)}`,
					margin: 0,
					cursor: 'default',
				}}
			>
				{text}
			</AntdTag>
		</Tooltip>
	);
};

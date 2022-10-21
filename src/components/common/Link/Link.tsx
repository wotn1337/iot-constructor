import React from 'react';
import { Button as AntdButton } from 'antd';
import './Link.scss';

type LinkProps = {
	text: string;
	href: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	disabled?: boolean;
	style?: React.CSSProperties;
};

export const Link: React.FC<LinkProps> = ({ text, onClick, disabled, style, href }) => {
	return (
		<AntdButton type="link" className="link" href={href} onClick={onClick} disabled={disabled} style={{ ...style }}>
			{text}
		</AntdButton>
	);
};

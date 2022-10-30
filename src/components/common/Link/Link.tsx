import React from 'react';
import { Button as AntdButton } from 'antd';
import './Link.scss';

type LinkProps = {
	text: string;
	href: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	disabled?: boolean;
	icon?: React.ReactNode;
	style?: React.CSSProperties;
};

export const Link: React.FC<LinkProps> = ({ text, onClick, disabled, style, href, icon }) => {
	return (
		<AntdButton
			type="link"
			className="link"
			href={'#/' + href}
			onClick={onClick}
			disabled={disabled}
			icon={icon}
			style={{ ...style }}
		>
			{text}
		</AntdButton>
	);
};

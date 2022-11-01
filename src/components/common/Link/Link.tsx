import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import './Link.scss';

type LinkProps = {
	text: string;
	href: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	disabled?: boolean;
	icon?: React.ReactNode;
	style?: React.CSSProperties;
	target?: ButtonProps['target'];
};

export const Link: React.FC<LinkProps> = ({ text, onClick, disabled, style, href, icon, target = '_self' }) => {
	return (
		<AntdButton
			type="link"
			className="link"
			href={href}
			onClick={onClick}
			disabled={disabled}
			icon={icon}
			style={{ ...style }}
			target={target}
		>
			{text}
		</AntdButton>
	);
};

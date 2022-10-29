import React from 'react';
import { Button as AntdButton } from 'antd';
import s from './Button.module.scss';

type ButtonProps = {
	text: string;
	type?: 'primary' | 'default';
	onClick?: React.MouseEventHandler<HTMLElement>;
	icon?: React.ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
	href?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'default', disabled = false, href, icon, style }) => {
	return (
		<AntdButton
			onClick={onClick}
			disabled={disabled}
			icon={icon}
			className={`${s.button} ${type === 'primary' ? s.primary : s.default}`}
			href={href}
			style={{ ...style }}
		>
			{text}
		</AntdButton>
	);
};

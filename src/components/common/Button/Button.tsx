import React from 'react';
import { Button as AntdButton } from 'antd';
import s from './Button.module.scss';

type ButtonProps = {
	type?: 'primary' | 'default';
	onClick?: React.MouseEventHandler<HTMLElement>;
	icon?: React.ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
	href?: string;
	children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
	onClick,
	type = 'default',
	disabled = false,
	href,
	icon,
	style,
	children,
}) => {
	return (
		<AntdButton
			onClick={onClick}
			disabled={disabled}
			icon={icon}
			className={`${s.button} ${type === 'primary' ? s.primary : s.default}`}
			href={href}
			style={{ ...style }}
		>
			{children}
		</AntdButton>
	);
};

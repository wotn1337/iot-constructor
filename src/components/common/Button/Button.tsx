import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import s from './Button.module.scss';

export type ButtonProps = {
	type?: 'primary' | 'default';
	onClick?: React.MouseEventHandler<HTMLElement>;
	icon?: React.ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
	href?: string;
	children?: React.ReactNode;
	classname?: string;
	target?: AntdButtonProps['target'];
};

export const Button: React.FC<ButtonProps> = ({
	onClick,
	type = 'default',
	disabled = false,
	href,
	icon,
	style,
	children,
	classname,
	target,
}) => {
	return (
		<AntdButton
			onClick={onClick}
			disabled={disabled}
			icon={icon}
			className={`${s.button} ${classname} ${type === 'primary' ? s.primary : s.default}`}
			href={href}
			target={target}
			style={{ ...style }}
		>
			{children}
		</AntdButton>
	);
};

import React from 'react';
import { Button as AntdButton } from 'antd';
import s from './Button.module.scss';

type ButtonProps = {
	text: string;
	type?: 'primary' | 'default';
	onClick?: React.MouseEventHandler<HTMLElement>;
	disabled?: boolean;
	style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'default', disabled = false, style }) => {
	return (
		<AntdButton
			onClick={onClick}
			disabled={disabled}
			className={`${s.button} ${type === 'primary' ? s.primary : s.default}`}
			style={{ ...style }}
		>
			{text}
		</AntdButton>
	);
};

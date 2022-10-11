import React from 'react';
import { Button as AntdButton } from 'antd';
import s from './Button.module.scss';

type ButtonProps = {
	text: string;
	type?: 'primary' | 'default';
	onClick?: React.MouseEventHandler<HTMLElement>;
	disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'primary', disabled = false }) => {
	return (
		<AntdButton onClick={onClick} disabled={disabled} className={s.button}>
			{text}
		</AntdButton>
	);
};

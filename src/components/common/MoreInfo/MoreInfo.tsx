import React, { useState } from 'react';
import { Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import s from './MoreInfo.module.scss';

type MoreInfoProps = {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
	top?: number;
	right?: number;
	size?: number;
};

export const MoreInfo: React.FC<MoreInfoProps> = ({ children, onClick, top, right, size }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div className={s.moreInfo} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
			<Button
				icon={<QuestionOutlined style={{ color: '#FA8C16', fontSize: size ? size / 2 : 11 }} />}
				className={s.moreInfo__button}
				onClick={onClick}
				style={{
					top: top ?? 20,
					right: right ?? 15,
					width: size ?? 20,
					height: size ?? 20,
					opacity: visible ? 1 : 0,
				}}
			/>
			{children}
		</div>
	);
};

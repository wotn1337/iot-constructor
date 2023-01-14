import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result } from 'antd';
import { Button } from '../components';

export const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				flex: '1 1 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Result
				status="404"
				title="404"
				subTitle="Страница не найдена"
				extra={
					<Button type="primary" onClick={() => navigate('/')}>
						На главную
					</Button>
				}
			/>
		</div>
	);
};

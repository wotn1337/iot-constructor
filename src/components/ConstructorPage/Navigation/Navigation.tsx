import React from 'react';
import { Col, Progress, Row } from 'antd';
import { Button } from '../../common/Button/Button';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { STEP_TYPES } from '../types';

type NavigationTitleProps = {
	onBack?: React.MouseEventHandler<HTMLElement>;
	onNext?: React.MouseEventHandler<HTMLElement>;
	percent: number;
	stepType: STEP_TYPES;
};

export const Navigation: React.FC<NavigationTitleProps> = ({ onNext, onBack, percent, stepType }) => {
	return (
		<Row justify="space-between" align="middle" gutter={20} style={{ margin: 0 }}>
			<Col flex="110px" style={{ padding: 0 }}>
				{onBack && (
					<Button onClick={onBack} icon={<ArrowLeftOutlined />}>
						Назад
					</Button>
				)}
			</Col>
			{stepType === STEP_TYPES.CONSTRUCTOR && (
				<Col flex="auto">
					<Progress
						percent={percent}
						showInfo={false}
						strokeWidth={20}
						strokeLinecap="butt"
						strokeColor={{
							'0%': '#FFFFFF',
							'100%': '#FF8413',
						}}
						trailColor="#D9D9D9"
					/>
				</Col>
			)}
			<Col style={{ padding: 0 }}>
				{onNext && (
					<Button
						type="primary"
						onClick={onNext}
						disabled={stepType === STEP_TYPES.CONSTRUCTOR && percent < 100}
					>
						{stepType === STEP_TYPES.CONSTRUCTOR && 'Создать траекторию'}
						{stepType !== STEP_TYPES.CONSTRUCTOR && 'Далее'}
						{stepType !== STEP_TYPES.CONSTRUCTOR && <ArrowRightOutlined />}
					</Button>
				)}
			</Col>
		</Row>
	);
};

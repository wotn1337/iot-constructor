import React from 'react';
import s from '../ConstructorPageContent/ConstructorPageContent.module.scss';
import { Col, Row } from 'antd';
import { Button } from '../../common/Button/Button';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

type NavigationTitleProps = {
	title: string;
	onBack?: React.MouseEventHandler<HTMLElement>;
	onNext?: React.MouseEventHandler<HTMLElement>;
};

export const NavigationTitle: React.FC<NavigationTitleProps> = ({ title, onNext, onBack }) => {
	return (
		<Row justify="space-between" align="middle">
			<Col flex="109px">
				{onBack && (
					<Button onClick={onBack} icon={<ArrowLeftOutlined />}>
						Назад
					</Button>
				)}
			</Col>
			<Col>
				<h4 className={s.title}>{title}</h4>
			</Col>
			<Col>
				{onNext && (
					<Button type="primary" onClick={onNext}>
						Далее
						<ArrowRightOutlined />
					</Button>
				)}
			</Col>
		</Row>
	);
};

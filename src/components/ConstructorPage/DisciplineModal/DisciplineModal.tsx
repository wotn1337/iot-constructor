import React from 'react';
import { Modal, Space } from 'antd';
import { Discipline } from '../../../common/types';
import { TitledBlock } from './TitledBlock/TitledBlock';
import './DisciplineModal.scss';
import { CourseList } from './CourseList/CourseList';
import { CloseOutlined } from '@ant-design/icons';

type DisciplineModalProps = {
	open: boolean;
	onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	discipline?: Discipline;
};

const DISCIPLINE: Discipline | undefined = {
	id: 1,
	title: 'Продуктовый дизайн',
	description:
		'Продуктовый дизайн - востребованное направление в дизайне, которое включает в себя и исследования, и аналитику, и проектирование интерфейсов, и даже участие в проработке стратегии развития продукта.\n' +
		'\n' +
		'Такая ответственная, но, без сомнения, интересная работа требует довольно глубоких знаний в смежных дизайну областях. \n' +
		'\n' +
		'На курсе подробно рассказывается и показывается на практике, кто такой продуктовый дизайнер, какими компетенциями он должен обладать и как это влияет на конечный продукт. Мы постигнем основы всех необходимых навыков, чтобы каждый из участников курса стал востребованным специалистом на рынке труда. \n' +
		'\n' +
		'Интерактивный формат лекций и большое количество практики позволит с легкостью освоить материал и создать проект для портфолио в конце курса.',
	courses: [
		{
			id: 1,
			title: 'Программирование на JavaScript (SkillBox)',
			description: '',
			limit: 1,
			realization: 'Смешанная',
			partner: {
				id: 1,
				title: 'SkillBox',
				description: '',
				logo: 'https://www.tadviser.ru/images/e/e7/Skillbox.png',
			},
		},
		{
			id: 2,
			title: 'JavaScript. Разработка веб-интерфейсов (HTML-академия)',
			description: '',
			limit: 1,
			realization: 'Онлайн',
			partner: {
				id: 1,
				title: 'HTML-академия',
				description: '',
				logo: 'https://lpmtech.ru/wp-content/uploads/2021/03/logo-color-1.png',
			},
		},
		{
			id: 3,
			title: 'Разработка на JavaScript (SkillFactory)',
			description: '',
			limit: 1,
			realization: 'Онлайн',
			partner: {
				id: 1,
				title: 'SkillFactory',
				description: '',
				logo: 'https://eduzillio.com/wp-content/uploads/2020/07/l5_montazhnaya-oblast-1-1.png',
			},
		},
		{
			id: 4,
			title: 'Основы веб-разработки JavaScript',
			description: '',
			limit: 1,
			realization: 'Традиционная',
		},
	],
};

export const DisciplineModal: React.FC<DisciplineModalProps> = ({ open, discipline, onCancel }) => {
	return (
		<Modal
			title={DISCIPLINE.title}
			open={open}
			onCancel={onCancel}
			footer={null}
			className="disciplineModal"
			bodyStyle={{ padding: '16px 24px 24px' }}
			centered={true}
			closeIcon={<CloseOutlined style={{ color: 'white' }} />}
			width={775}
		>
			<Space direction="vertical" size={24}>
				<TitledBlock title="Описание">
					<div className="disciplineModal__description">{DISCIPLINE.description}</div>
				</TitledBlock>
				<TitledBlock title="Список курсов">
					<CourseList courses={DISCIPLINE.courses} />
				</TitledBlock>
			</Space>
		</Modal>
	);
};

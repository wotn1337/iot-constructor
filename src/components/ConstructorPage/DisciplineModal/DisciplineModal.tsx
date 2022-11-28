import React from 'react';
import { Modal, Skeleton, Space } from 'antd';
import { Discipline } from '../../../common/types';
import { TitledBlock } from './TitledBlock/TitledBlock';
import './DisciplineModal.scss';
import { CourseList } from './CourseList/CourseList';
import { CloseOutlined } from '@ant-design/icons';

type DisciplineModalProps = {
	open: boolean;
	onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	discipline: Discipline | undefined;
	loading: boolean;
};

export const DisciplineModal: React.FC<DisciplineModalProps> = ({ open, discipline, onCancel, loading }) => {
	return (
		<Modal
			title={!loading ? discipline?.title : ''}
			open={open}
			onCancel={onCancel}
			footer={null}
			className="disciplineModal"
			bodyStyle={{ padding: '16px 24px 24px' }}
			centered={true}
			closeIcon={<CloseOutlined style={{ color: 'white' }} />}
			width={775}
		>
			<Skeleton loading={loading} paragraph={{ rows: 5 }}>
				<Space direction="vertical" size={24} className="disciplineModal__content">
					<TitledBlock title="Описание">
						<div
							className="disciplineModal__content__description"
							dangerouslySetInnerHTML={{ __html: discipline?.description ?? '' }}
						/>
					</TitledBlock>
					<TitledBlock title="Список курсов">
						<CourseList courses={discipline?.courses} />
					</TitledBlock>
				</Space>
			</Skeleton>
		</Modal>
	);
};

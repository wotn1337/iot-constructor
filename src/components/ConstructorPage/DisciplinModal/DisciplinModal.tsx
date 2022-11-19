import React from 'react';
import { Modal } from 'antd';
import { Discipline } from '../../../common/types';

type DisciplinModalProps = {
	open: boolean;
	onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	disciplin?: Discipline;
};

export const DisciplinModal: React.FC<DisciplinModalProps> = ({ open, disciplin, onCancel }) => {
	return (
		<Modal title={disciplin?.title} open={open} onCancel={onCancel} footer={null}>
			модалка
		</Modal>
	);
};

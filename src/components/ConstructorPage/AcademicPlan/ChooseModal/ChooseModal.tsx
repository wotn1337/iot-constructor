import React from 'react';
import { Modal } from 'antd';
import { PageInProgress } from '../../../common/PageInProgress/PageInProgress';

type ChooseModalProps = {
	open: boolean;
	onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const ChooseModal: React.FC<ChooseModalProps> = ({ open, onCancel }) => {
	return (
		<Modal
			open={open}
			onCancel={onCancel}
			footer={null}
			centered={true}
			width={775}
		>
			<PageInProgress page="Дополнительный выбор" />
		</Modal>
	);
};

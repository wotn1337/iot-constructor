import React, { ReactInstance } from 'react';
import { Button, Space, Tooltip, Typography } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import './SaveToPdfButton.scss';

type SaveToPdfButtonProps = {
	targetRef: React.MutableRefObject<ReactInstance | null>;
	tooltipText?: string;
	buttonText?: string;
};

export const SaveToPdfButton: React.FC<SaveToPdfButtonProps> = ({
	targetRef,
	tooltipText,
	buttonText = 'Сформировать pdf',
}) => {
	const handlePrint = useReactToPrint({
		content: () => targetRef.current,
	});

	return (
		<Tooltip title={tooltipText}>
			<Button type="text" onClick={handlePrint} className="save-to-pdf-button">
				<Space direction="horizontal" size={10}>
					<Typography.Text>{buttonText}</Typography.Text>
					<FilePdfOutlined className="pdf-icon" />
				</Space>
			</Button>
		</Tooltip>
	);
};

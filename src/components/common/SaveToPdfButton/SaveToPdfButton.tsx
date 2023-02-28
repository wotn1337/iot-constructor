import React, { ReactInstance } from 'react';
import { Button, Tooltip } from 'antd';
import { FilePdfTwoTone } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';

type SaveToPdfButtonProps = {
	targetRef: React.MutableRefObject<ReactInstance | null>;
	tooltipText?: string;
};

export const SaveToPdfButton: React.FC<SaveToPdfButtonProps> = ({ targetRef, tooltipText }) => {
	const handlePrint = useReactToPrint({
		content: () => targetRef.current,
	});

	return (
		<Tooltip title={tooltipText}>
			<Button
				type="text"
				icon={<FilePdfTwoTone twoToneColor="#EF6C00" style={{ color: '#EF6C00', fontSize: 30 }} />}
				onClick={handlePrint}
			/>
		</Tooltip>
	);
};

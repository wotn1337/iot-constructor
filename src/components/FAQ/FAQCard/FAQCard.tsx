import React, { useState } from 'react';
import { Collapse } from 'antd';
import { FAQType } from '../../../common/types';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './FAQCard.scss';

type FAQCardProps = FAQType;

const { Panel } = Collapse;

export const FAQCard: React.FC<FAQCardProps> = ({ id, question, answer }: FAQType) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Collapse
			className="faq_card"
			expandIconPosition="end"
			expandIcon={() => {
				return isOpen ? <MinusOutlined className="icon" /> : <PlusOutlined className="icon" />;
			}}
			onChange={() => setIsOpen((prev) => !prev)}
		>
			<Panel header={question} key={id}>
				<p dangerouslySetInnerHTML={{ __html: answer }} />
			</Panel>
		</Collapse>
	);
};

import React from 'react';
import { List } from 'antd';

type DisciplinsListProps = {
	title: string;
	type: 'default' | 'primary';
	items: string[];
};

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type }) => {
	return (
		<List
			size="small"
			header={title}
			bordered
			dataSource={items}
			renderItem={(item) => <List.Item>{item}</List.Item>}
		/>
	);
};

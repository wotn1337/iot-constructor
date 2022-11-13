import React from 'react';
import { List } from 'antd';
import { List as ListType } from '../../../types';
import './DisciplinsList.scss';

type DisciplinsListProps = ListType & { hidden: boolean };

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, hidden }) => {
	return (
		<List
			size="small"
			header={title}
			bordered
			dataSource={items}
			renderItem={(item) => <List.Item>{item}</List.Item>}
			className="disciplins-list"
			locale={{ emptyText: 'В этом семестре отсутствуют курсы по выбору' }}
			style={{ display: hidden ? 'none' : 'block' }}
		/>
	);
};

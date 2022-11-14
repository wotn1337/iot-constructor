import React from 'react';
import { List, Space } from 'antd';
import { List as ListType } from '../../../types';
import './DisciplinsList.scss';

type DisciplinsListProps = ListType & { hidden: boolean };

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, hidden }) => {
	return (
		<List
			size="small"
			header={<div className={type === 'primary' ? 'primary' : ''}>{title}</div>}
			bordered
			dataSource={items}
			renderItem={(item) => (
				<List.Item>
					<Space>
						{item.professional_trajectories && (
							<div
								style={{ backgroundColor: item.professional_trajectories[0].color }}
								className="disc-badge"
							/>
						)}
						{item.title}
					</Space>
				</List.Item>
			)}
			className="disciplins-list"
			locale={{ emptyText: 'В этом семестре отсутствуют курсы по выбору' }}
			style={{ display: hidden ? 'none' : 'block' }}
		/>
	);
};

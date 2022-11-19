import React from 'react';
import { List, Space } from 'antd';
import { List as ListType } from '../../../types';
import './DisciplinsList.scss';
import { Tag } from '../../../../../common/Tag/Tag';

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
					<Space direction="vertical" size={8}>
						{item.title}
						<Space size={4}>
							{item.professional_trajectories?.map((track) => (
								<Tag key={track.id} color={track.color} text={track.slug} />
							))}
						</Space>
					</Space>
				</List.Item>
			)}
			className="disciplins-list"
			locale={{ emptyText: 'В этом семестре отсутствуют курсы по выбору' }}
			style={{ display: hidden ? 'none' : 'block' }}
		/>
	);
};

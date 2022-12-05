import React from 'react';
import { List, Space } from 'antd';
import { List as ListType } from '../../../types';
import './DisciplinsList.scss';
import { Tag } from '../../../../../common/Tag/Tag';
import { setDisciplineId, useConstructorContext } from '../../../../Context';
import { reachGoal } from '../../../../../../common/utils';

type DisciplinsListProps = ListType & { hidden: boolean };

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, hidden, placeholder }) => {
	const { dispatch } = useConstructorContext();
	return (
		<List
			size="small"
			header={<div className={type === 'primary' ? 'primary' : ''}>{title}</div>}
			bordered
			dataSource={items}
			renderItem={(item) => (
				<List.Item
					className="discipline-item"
					onClick={() => {
						dispatch(setDisciplineId(item.id));
						reachGoal('moreAboutDisciplineUP');
					}}
				>
					<Space direction="vertical" size={8} className="item-inner">
						{item.title}
						<Space size={4} className="tags-list">
							{item.professional_trajectories?.map((track) => (
								<Tag key={track.id} color={track.color} text={track.slug} />
							))}
						</Space>
					</Space>
				</List.Item>
			)}
			className="disciplins-list"
			locale={{ emptyText: placeholder }}
			style={{ display: hidden ? 'none' : 'block' }}
		/>
	);
};

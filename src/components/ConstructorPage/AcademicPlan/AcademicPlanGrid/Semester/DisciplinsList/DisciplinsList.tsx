import React from 'react';
import { List, Space } from 'antd';
import { AcademicPlanItem, List as ListType } from '../../../types';
import './DisciplinsList.scss';
import { Tag } from '../../../../../common/Tag/Tag';
import { setDisciplineId, useConstructorContext } from '../../../../Context';
import { reachGoal } from '../../../../../../common/utils';
import { ElectedDiscipline } from './ElectedDiscipline/ElectedDiscipline';
import { Discipline } from '../../../../../../common/types';

type DisciplinsListProps = ListType & {
	hidden?: boolean;
	addDiscipline?: (discipline: Discipline) => void;
};

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, placeholder, addDiscipline }) => {
	const { dispatch } = useConstructorContext();

	const onCLickHandler = (item: AcademicPlanItem) => {
		if (addDiscipline) {
			addDiscipline(item);
		} else if (!item.isEmpty) {
			dispatch(setDisciplineId(item.id));
			reachGoal('moreAboutDisciplineUP');
		}
	};

	return (
		<>
			<List
				size="small"
				header={title ? <div className={type === 'primary' ? 'primary' : ''}>{title}</div> : undefined}
				bordered
				dataSource={items}
				renderItem={(item) => (
					<List.Item className="discipline-item" onClick={() => onCLickHandler(item)}>
						{!item.isEmpty ? (
							<Space direction="vertical" size={8} className="item-inner">
								{item.title}
								<Space size={4} className="tags-list">
									{item.professional_trajectories?.map((track) => (
										<Tag key={track.id} color={track.color} text={track.slug} />
									))}
								</Space>
							</Space>
						) : (
							<ElectedDiscipline item={item} />
						)}
					</List.Item>
				)}
				className="disciplins-list"
				locale={{ emptyText: placeholder }}
			/>
		</>
	);
};

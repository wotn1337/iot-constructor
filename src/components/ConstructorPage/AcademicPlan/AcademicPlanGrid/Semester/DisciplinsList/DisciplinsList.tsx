import React from 'react';
import { Button, List, Space } from 'antd';
import { AcademicPlanItem, List as ListType } from '../../../types';
import './DisciplinsList.scss';
import { Tag } from '../../../../../common/Tag/Tag';
import { setDisciplineId, setFinalAcademicPlan, useConstructorContext } from '../../../../Context';
import { reachGoal } from '../../../../../../common/utils';
import { ElectedDiscipline } from './ElectedDiscipline/ElectedDiscipline';
import { Discipline } from '../../../../../../common/types';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';

type DisciplinsListProps = ListType & {
	hidden?: boolean;
	addDiscipline?: (discipline: Discipline) => void;
};

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, placeholder, addDiscipline }) => {
	const {
		state: { academicPlan },
		dispatch,
	} = useConstructorContext();

	const onCLickHandler = (item: AcademicPlanItem) => {
		if (addDiscipline) {
			addDiscipline(item);
		} else if (!item.isEmpty) {
			dispatch(setDisciplineId(item.id));
			reachGoal('moreAboutDisciplineUP');
		}
	};

	const deleteDiscipline = (item: AcademicPlanItem) => {
		dispatch(
			setFinalAcademicPlan(
				academicPlan?.map((semester) => ({
					...semester,
					lists: semester.lists.map((list) => {
						if (list.type === 'primary') {
							return {
								...list,
								items: list.items.map((i) =>
									i.id === item.id
										? {
												...item,
												isEmpty: true,
												emptyText: 'Здесь мы оставили выбора за тобой',
										  }
										: i
								),
							};
						}
						return list;
					}),
				}))
			)
		);
	};

	return (
		<>
			<List
				size="small"
				header={title ? <div className={type === 'primary' ? 'primary' : undefined}>{title}</div> : undefined}
				bordered
				dataSource={items}
				renderItem={(item) => (
					<List.Item className="discipline-item" onClick={() => onCLickHandler(item)}>
						{(item.elected || addDiscipline) && !item.isEmpty && (
							<Button
								icon={
									addDiscipline ? (
										<QuestionOutlined style={{ color: '#FA8C16', fontSize: 11 }} />
									) : (
										<CloseOutlined style={{ color: '#FF4D4F', fontSize: 11 }} />
									)
								}
								className={addDiscipline ? 'info-button' : 'delete-button'}
								onClick={(e) => {
									e.stopPropagation();
									if (addDiscipline) {
										dispatch(setDisciplineId(item.id));
									} else {
										deleteDiscipline(item);
									}
								}}
							/>
						)}
						{!item.isEmpty ? (
							<Space direction="vertical" size={8} className="item-inner">
								{item.title}
								<Space size={4} className="tags-list">
									{item.professional_trajectories?.map((track) => (
										<Tag key={track.id} color={track.color} text={track.abbreviated_name} />
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

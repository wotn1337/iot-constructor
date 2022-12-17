import React, { useState } from 'react';
import { List, Space } from 'antd';
import { AcademicPlanItem, List as ListType } from '../../../types';
import './DisciplinsList.scss';
import { Tag } from '../../../../../common/Tag/Tag';
import { setDisciplineId, useConstructorContext } from '../../../../Context';
import { reachGoal } from '../../../../../../common/utils';
import { PlusSquareTwoTone } from '@ant-design/icons';
import { ChooseModal } from '../../../ChooseModal/ChooseModal';

type DisciplinsListProps = ListType & { hidden: boolean };

export const DisciplinsList: React.FC<DisciplinsListProps> = ({ title, items, type, hidden, placeholder }) => {
	const { dispatch } = useConstructorContext();
	const [openChooseModal, setOpenChooseModal] = useState(false);

	const onCLickHandler = (item: AcademicPlanItem) => {
		if (item.isEmpty) {
			setOpenChooseModal(true);
		} else {
			dispatch(setDisciplineId(item.id));
			reachGoal('moreAboutDisciplineUP');
		}
	};

	return (
		<>
			<List
				size="small"
				header={<div className={type === 'primary' ? 'primary' : ''}>{title}</div>}
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
							<Space direction="horizontal" style={{ width: '100%' }} className="item-inner__empty">
								<span>{item.emptyText}</span>
								<PlusSquareTwoTone twoToneColor="#FA8C16" style={{ fontSize: 20 }} />
							</Space>
						)}
					</List.Item>
				)}
				className="disciplins-list"
				locale={{ emptyText: placeholder }}
				style={{ display: hidden ? 'none' : 'block' }}
			/>
			<ChooseModal open={openChooseModal} onCancel={() => setOpenChooseModal(false)} />
		</>
	);
};

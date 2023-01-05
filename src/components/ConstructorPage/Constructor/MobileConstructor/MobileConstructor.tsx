import React, { useEffect, useState } from 'react';
import { setColumns, setSemesterColumns, setSemesterFinish, useConstructorContext } from '../../Context';
import { Discipline, EducationModule } from '../../../../common/types';
import { useSemestersQuery } from '../../../../hooks/useSemestersQuery';
import { Empty as EmptyImage } from '../../../../images';
import { Empty, Space } from 'antd';
import { SemesterPagination } from '../SemesterPagination/SemesterPagination';
import './MobileConstructor.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MobileModule } from './MobileModule/MobileModule';

type MobileConstructorProps = {
	modules: EducationModule[];
};

export const MobileConstructor: React.FC<MobileConstructorProps> = ({ modules }) => {
	const {
		state: { columns, semesters, currentSemester },
		dispatch,
	} = useConstructorContext();

	const { data: semestersName } = useSemestersQuery();
	const currentSemesterTitle = semestersName?.find(
		(sem) => sem.numerical_representation === currentSemester
	)?.text_representation;
	const isColumnEmpty = columns['1'].items.length === 0;
	const [isPaginationOpen, setIsPaginationOpen] = useState<boolean>(false);

	useEffect(() => {
		if (
			columns['2'].items.every((module) => {
				return !module.choice_limit || (module.choice_limit === module.disciplines.length && module.is_spec);
			})
		) {
			dispatch(setSemesterFinish({ id: currentSemester, isFinished: true }));
		}
		dispatch(setSemesterColumns({ id: currentSemester, columns }));
	}, [columns]);

	useEffect(() => {
		const data = semesters.find((sem) => sem.id.toString() === currentSemester.toString())?.columns;

		if (data) {
			dispatch(setColumns(data));
		} else {
			const disciplines: Discipline[] = [];
			modules
				.filter((module) => !module.is_spec)
				.forEach((module) => {
					module.disciplines.forEach((disc) => disciplines.push(disc));
				});

			const requiredModule: EducationModule = {
				id: 'required_module',
				title: 'Обязательные дисциплины',
				is_spec: false,
				disciplines: disciplines,
				choice_limit: 0,
			};

			dispatch(
				setColumns({
					'1': {
						...columns['1'],
						items: modules?.filter((module) => module.is_spec),
					},
					'2': {
						...columns['2'],
						items: [
							...modules
								?.filter((module) => module.is_spec)
								.map((module) => ({
									...module,
									id: `module_${module.id}`,
									disciplines: [],
								})),
							requiredModule,
						],
					},
				})
			);
		}
	}, [currentSemester]);

	return (
		<div className="mobileConstructor">
			<div className="mobileConstructor__title">{currentSemesterTitle}</div>

			{isColumnEmpty ? (
				<Empty
					className="mobileConstructor__empty"
					image={EmptyImage}
					description="В этом семестре нет дисциплин по выбору"
				/>
			) : (
				<Space size={16} direction="vertical">
					{columns['1'].items.map((module) => (
						<MobileModule column={columns['1']} module={module} />
					))}
				</Space>
			)}

			<div className="mobileConstructor__pagination">
				<button
					className="mobileConstructor__pagination__button"
					onClick={() => setIsPaginationOpen((prev) => !prev)}
					style={{ right: isPaginationOpen ? 55 : 0 }}
				>
					{isPaginationOpen ? <RightOutlined /> : <LeftOutlined />}
				</button>
				<div className="mobileConstructor__pagination__semesters" style={{ right: isPaginationOpen ? 0 : -55 }}>
					<SemesterPagination gap={5} height={30} width={30} fontSize={10} fontNumberSize={16} />
				</div>
			</div>
		</div>
	);
};

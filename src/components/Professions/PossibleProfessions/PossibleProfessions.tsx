import React, { useState } from 'react';
import { Switcher } from './Switcher/Switcher';
import s from './PossibleProfessions.module.scss';
import { ProfessionType } from '../types';
import { Profession } from './Profession/Profession';
import { useMediaQuery } from 'react-responsive';
import { MobilePossibleProfessions } from './MobilePossibleProfessions/MobilePossibleProfessions';

type PossibleProfessionsProps = {
	professions: ProfessionType[];
};

export const PossibleProfessions: React.FC<PossibleProfessionsProps> = ({ professions }) => {
	const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
	const isLarge = useMediaQuery({ minWidth: 821 });

	return (
		<section className={s.possibleProfessions}>
			<h3 className={s.title}>Возможные профессии</h3>
			{isLarge ? (
				<>
					{professions.length > 1 && (
						<Switcher
							currentProfessionIndex={currentProfessionIndex}
							setCurrentProfessionIndex={setCurrentProfessionIndex}
							professions={professions.map((p) => ({ title: p.title }))}
						/>
					)}
					<Profession profession={professions[currentProfessionIndex]} />
				</>
			) : (
				<MobilePossibleProfessions professions={professions} />
			)}
		</section>
	);
};

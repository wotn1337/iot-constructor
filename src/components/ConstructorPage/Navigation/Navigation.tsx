import React, { useEffect, useMemo, useState } from 'react';
import { Col, Progress, Row, Space } from 'antd';
import { Button } from '../../common/Button/Button';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Step, STEP_TYPE } from '../types';
import { useConstructorContext } from '../Context';
import { NavLink } from 'react-router-dom';
import { reachGoal } from '../../../common/utils';
import s from './Navigation.module.scss';
import { useMediaQuery } from 'react-responsive';

type NavigationTitleProps = {
	currentStep: Step | undefined;
	percent: number;
	steps: Step[];
};

export const Navigation: React.FC<NavigationTitleProps> = ({ percent, currentStep, steps }) => {
	const isDesktop = useMediaQuery({ minWidth: 768 });
	const isProgressVisible = useMediaQuery({ minWidth: 1216 });

	const {
		state: { selectedDirection, selectedType, selectedTrajectory },
	} = useConstructorContext();
	const [disabledNext, setDisabledNext] = useState(false);
	const currentStepIndex = useMemo(
		() => steps.findIndex((step) => step.type === currentStep?.type),
		[steps, currentStep]
	);

	useEffect(() => {
		switch (currentStep?.type) {
			case STEP_TYPE.DIRECTION_SELECTION: {
				setDisabledNext(!selectedDirection);
				break;
			}
			case STEP_TYPE.TYPE_SELECTION: {
				setDisabledNext(!selectedType);
				break;
			}
			case STEP_TYPE.TRAJECTORIES: {
				setDisabledNext(!selectedTrajectory);
				break;
			}
			case STEP_TYPE.CONSTRUCTOR: {
				setDisabledNext(percent < 100);
				break;
			}
			default: {
				setDisabledNext(false);
				break;
			}
		}
	}, [currentStep, percent, selectedDirection, selectedType, selectedTrajectory]);

	return (
		<Row justify="space-between" align="middle" gutter={20} className={s.navigation}>
			<Col flex="110px" className={s.backButton}>
				{currentStep?.type !== STEP_TYPE.DIRECTION_SELECTION && (
					<Button style={{ color: 'black' }}>
						<NavLink to={steps[currentStepIndex - 1]?.type}>
							<Space size={4}>
								<ArrowLeftOutlined style={{ fontSize: isDesktop ? 'initial' : 20 }} />
								{isDesktop ? '??????????' : ''}
							</Space>
						</NavLink>
					</Button>
				)}
			</Col>
			{currentStep?.type === STEP_TYPE.CONSTRUCTOR && isProgressVisible && (
				<Col flex="auto">
					<Progress
						percent={percent}
						showInfo={false}
						strokeWidth={20}
						strokeLinecap="butt"
						strokeColor={{
							'0%': '#FFFFFF',
							'100%': '#FF8413',
						}}
						trailColor="#D9D9D9"
					/>
				</Col>
			)}
			<Col className={s.nextButton}>
				{currentStep?.type !== STEP_TYPE.TRAJECTORY_ANALYSIS && (
					<Button
						type="primary"
						disabled={disabledNext}
						onClick={
							currentStep?.type === STEP_TYPE.CONSTRUCTOR
								? () => reachGoal('lastCreateTrajectory')
								: undefined
						}
					>
						<NavLink to={steps[currentStepIndex + 1]?.type}>
							{currentStep?.type === STEP_TYPE.CONSTRUCTOR && '?????????????? ????????????????????'}
							{currentStep?.type !== STEP_TYPE.CONSTRUCTOR && (
								<Space size={4}>
									{isDesktop ? '??????????' : ''}
									<ArrowRightOutlined style={{ fontSize: isDesktop ? 'initial' : 20 }} />
								</Space>
							)}
						</NavLink>
					</Button>
				)}
			</Col>
		</Row>
	);
};

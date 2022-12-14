import React, { useEffect, useMemo, useState } from 'react';
import { Col, Progress, Row, Space } from 'antd';
import { Button } from '../../common/Button/Button';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Step, STEP_TYPES } from '../types';
import { useConstructorContext } from '../Context';
import { NavLink } from 'react-router-dom';
import { reachGoal } from '../../../common/utils';

type NavigationTitleProps = {
	currentStep: Step | undefined;
	percent: number;
	steps: Step[];
};

export const Navigation: React.FC<NavigationTitleProps> = ({ percent, currentStep, steps }) => {
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
			case STEP_TYPES.DIRECTION_SELECTION: {
				setDisabledNext(!selectedDirection);
				break;
			}
			case STEP_TYPES.TYPE_SELECTION: {
				setDisabledNext(!selectedType);
				break;
			}
			case STEP_TYPES.TRAJECTORIES: {
				setDisabledNext(!selectedTrajectory);
				break;
			}
			case STEP_TYPES.CONSTRUCTOR: {
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
		<Row justify="space-between" align="middle" gutter={20} style={{ margin: 0 }}>
			<Col flex="110px" style={{ padding: 0 }}>
				{currentStep?.type !== STEP_TYPES.DIRECTION_SELECTION && (
					<Button style={{ color: 'black' }}>
						<NavLink to={steps[currentStepIndex - 1]?.type}>
							<Space size={4}>
								<ArrowLeftOutlined />
								Назад
							</Space>
						</NavLink>
					</Button>
				)}
			</Col>
			{currentStep?.type === STEP_TYPES.CONSTRUCTOR && (
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
			<Col style={{ padding: 0 }}>
				{currentStep?.type !== STEP_TYPES.ACADEMIC_PLAN && (
					<Button
						type="primary"
						disabled={disabledNext}
						onClick={
							currentStep?.type === STEP_TYPES.CONSTRUCTOR
								? () => reachGoal('lastCreateTrajectory')
								: undefined
						}
					>
						<NavLink to={steps[currentStepIndex + 1]?.type}>
							{currentStep?.type === STEP_TYPES.CONSTRUCTOR && 'Создать траекторию'}
							{currentStep?.type !== STEP_TYPES.CONSTRUCTOR && (
								<Space size={4}>
									Далее
									<ArrowRightOutlined />
								</Space>
							)}
						</NavLink>
					</Button>
				)}
			</Col>
		</Row>
	);
};

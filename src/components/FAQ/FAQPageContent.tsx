import React, { useEffect, useState } from 'react';
import { FAQ as FAQImage } from './../../images';
import './FAQPageContent.scss';
import { BackgroundWrapper } from '../common/BackgroundWrapper/BackgroundWrapper';
import { MoreQuestionBlock } from './MoreQuestionBlock/MoreQuestionBlock';
import { useFAQQuery } from '../../hooks';
import { FAQCard } from './FAQCard/FAQCard';
import { FAQType } from '../../common/types';
import { Space } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Loader } from '../common/Loader/Loader';
import { Helmet } from 'react-helmet';

type FAQProps = {};

export const FAQPageContent: React.FC<FAQProps> = ({}) => {
	const { data, isLoading } = useFAQQuery();
	const [firstPartQuestions, setFirstPartQuestions] = useState<FAQType[]>([]);
	const [secondPartQuestions, setSecondPartQuestions] = useState<FAQType[]>([]);

	const isMobile = useMediaQuery({ maxWidth: 1260 });

	useEffect(() => {
		if (data) {
			const questions = [...data];
			const sliceCount = Math.ceil(questions.length / 2);
			const removed = questions.splice(0, sliceCount);
			setFirstPartQuestions(removed);
			setSecondPartQuestions(questions);
		}
	}, [data]);

	return (
		<BackgroundWrapper>
			<Helmet>
				<title>Частые вопросы</title>
			</Helmet>
			<Loader loading={isLoading}>
				<section className="inner">
					<img src={FAQImage} alt={'image'} className="image" />
					<Space
						direction={isMobile ? 'vertical' : 'horizontal'}
						style={{ width: '100%' }}
						size={20}
						align={isMobile ? 'center' : 'start'}
					>
						{isMobile && data?.map((question) => <FAQCard {...question} key={question.id} />)}
						{!isMobile && (
							<>
								<Space direction="vertical" size={32}>
									{firstPartQuestions?.map((question) => (
										<FAQCard {...question} key={question.id} />
									))}
								</Space>
								<Space direction="vertical" size={32}>
									{secondPartQuestions?.map((question) => (
										<FAQCard {...question} key={question.id} />
									))}
								</Space>
							</>
						)}
					</Space>
				</section>
				<MoreQuestionBlock />
			</Loader>
		</BackgroundWrapper>
	);
};

import { StudentReview } from '../../../common/types';

export const getBadge = (
	issueYear: StudentReview['year_of_issue'],
	educationalDirection: StudentReview['educational_direction'],
	course: StudentReview['course']
) => {
	if (issueYear) {
		return `${issueYear} год выпуска`;
	}

	if (educationalDirection) {
		return educationalDirection;
	}

	if (course) {
		return `${course} курс`;
	}
};

export enum ROUTES {
	MAIN = '/',
	CONSTRUCTOR = 'constructor',
	PROFESSIONS = 'professions',
	EMPLOYEES = 'employees',
	PARTNERS = 'partners-courses',
	FAQ = 'faq',
	COURSE = 'course',
}

export const PageRoutes = [
	{ title: 'Конструктор', route: ROUTES.CONSTRUCTOR },
	{ title: 'Профессии', route: ROUTES.PROFESSIONS },
	{ title: 'Кураторы', route: ROUTES.EMPLOYEES },
	{ title: 'Курсы партнеров', route: ROUTES.PARTNERS },
	{ title: 'Частые вопросы', route: ROUTES.FAQ },
];

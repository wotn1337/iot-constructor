export enum ROUTES {
	MAIN = '/',
	CONSTRUCTOR = 'constructor',
	PROFESSIONS = 'professions',
	EMPLOYEES = 'employees',
	PARTNERS = 'partners',
}

export const PageRoutes = [
	{ title: 'Конструктор', route: ROUTES.CONSTRUCTOR },
	{ title: 'Профессии', route: ROUTES.PROFESSIONS },
	{ title: 'Кураторы', route: ROUTES.EMPLOYEES },
	{ title: 'Партнеры', route: ROUTES.PARTNERS },
];

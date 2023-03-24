import React, { useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { ConstructorPage, ErrorPage, MainPage } from './pages';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageInProgress } from './components/common/PageInProgress/PageInProgress';
import { Helmet } from 'react-helmet';
import { EmployeesPage } from './pages/EmployeesPage';
import { Error404Robot, ServerErrorRobot, Socket } from './images';
import { ServerErrorContext } from './providers/ServerErrorProvider';

const queryClient = new QueryClient();

export const App = () => {
	const { pathname } = useLocation();
	const { error } = useContext(ServerErrorContext);

	useEffect(() => {
		if (pathname) {
			// @ts-ignore
			window.ym(91451529, 'hit', pathname);
		}
	}, [pathname]);

	if (error) {
		return (
			<ErrorPage
				code={error.response?.status}
				pageTitle={`Ошибка ${error.response?.status}`}
				title="Sorry"
				subTitle={error.response?.status === 503 ? 'Сайт на техническом обслуживании' : 'Ошибка сервера'}
				image={ServerErrorRobot}
				textStyle={{ color: '#FA8C16' }}
			/>
		);
	}

	return (
		<>
			<Helmet>
				<title>Конструктор ИОТ</title>
			</Helmet>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route element={<Layout />}>
						<Route index path={ROUTES.MAIN} element={<MainPage />} />
						<Route path={`${ROUTES.CONSTRUCTOR}/*`} element={<ConstructorPage />} />
						<Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
						<Route
							path={ROUTES.PROFESSIONS}
							element={
								<>
									<Helmet>
										<title>Профессии</title>
									</Helmet>
									<PageInProgress page="Профессии" />
								</>
							}
						/>
						<Route
							path={ROUTES.PARTNERS}
							element={
								<>
									<Helmet>
										<title>Партнеры</title>
									</Helmet>
									<PageInProgress page="Партнеры" />
								</>
							}
						/>
					</Route>
					<Route
						path="*"
						element={
							<ErrorPage
								code={404}
								title="Oops!"
								subTitle="Страница не найдена"
								image={Error404Robot}
								subImage={Socket}
								pageTitle="Страница не найдена"
								buttonProps={{
									type: 'primary',
									children: 'Вернуться на главную',
									href: ROUTES.MAIN,
								}}
								textStyle={{ color: '#1890FF' }}
							/>
						}
					/>
				</Routes>
			</QueryClientProvider>
		</>
	);
};

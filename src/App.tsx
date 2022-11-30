import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { ConstructorPage, MainPage } from './pages';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageInProgress } from './components/common/PageInProgress/PageInProgress';
import { Helmet } from 'react-helmet';

const queryClient = new QueryClient();

export const App = () => {
	const { pathname } = useLocation();
	if (pathname) {
		// @ts-ignore
		window.ym(91451529, 'hit', pathname);
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
							path={ROUTES.EMPLOYEES}
							element={
								<>
									<Helmet>
										<title>Кураторы</title>
									</Helmet>
									<PageInProgress page="Кураторы" />
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
				</Routes>
			</QueryClientProvider>
		</>
	);
};

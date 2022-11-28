import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { ConstructorPage, MainPage } from './pages';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageInProgress } from './components/common/PageInProgress/PageInProgress';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path={ROUTES.MAIN} element={<MainPage />} />
						<Route path={ROUTES.CONSTRUCTOR} element={<ConstructorPage />} />
						<Route path={ROUTES.PROFESSIONS} element={<PageInProgress page="Профессии" />} />
						<Route path={ROUTES.EMPLOYEES} element={<PageInProgress page="Кураторы" />} />
						<Route path={ROUTES.PARTNERS} element={<PageInProgress page="Партнеры" />} />
					</Route>
				</Routes>
			</HashRouter>
		</QueryClientProvider>
	);
};

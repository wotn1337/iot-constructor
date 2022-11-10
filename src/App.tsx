import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { ConstructorPage, MainPage } from './pages';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path={ROUTES.MAIN} element={<MainPage />} />
						<Route path={ROUTES.CONSTRUCTOR} element={<ConstructorPage />} />
						<Route path={ROUTES.PROFESSIONS} element={<h1>Профессии</h1>} />
						<Route path={ROUTES.EMPLOYEES} element={<h1>Сотрудники</h1>} />
						<Route path={ROUTES.PARTNERS} element={<h1>Партнеры</h1>} />
					</Route>
				</Routes>
			</HashRouter>
		</QueryClientProvider>
	);
};

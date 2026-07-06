import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';

const routes = [
	{
		element: <MainLayout/>,
		children: [
			{
				index: true,
				element: <Home/>
			}
		]
	}
]

export default routes;
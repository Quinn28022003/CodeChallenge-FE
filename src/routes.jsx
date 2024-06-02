import MainLayout from '~/layouts/MainLayout'
import SubLayout from '~/layouts/SubLayout'
import Account from '~/pages/Account'
import AssignmentDetail from '~/pages/AssignmentDetail'
import ChallengePage from '~/pages/Challenge'
import Chat from '~/pages/Chat'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Manage from '~/pages/Manage'
import Practice from '~/pages/Practice'
import Register from '~/pages/Register'
import ReviewerPage from '~/pages/Reviewer'
import SeeRequest from '~/pages/SeeRequest'
import Discuss from './components/Discuss'
import Edit from './components/Edit'
import List from './components/Manage/List'
import Statistics from './components/Manage/Statistics'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Response from './components/Response'
import Solutions from './components/Solutions'
import Submit from './components/Submit'
import Topic from './components/Topic'

const publicRoutes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'reviewer',
				element: <ReviewerPage />
			},
			{
				path: 'challenge',
				element: <ChallengePage />
			}
		]
	},
	{
		path: '/',
		element: <SubLayout />,
		children: [
			{
				path: 'practice',
				element: <Practice />,
				children: [
					{
						index: true,
						element: <Topic />
					},
					{
						path: '*',
						element: <NotFound />
					}
				]
			}
		]
	},
	{
		path: 'register',
		element: <Register />
	},
	{
		path: 'login',
		element: <Login />
	},
	{
		path: '*',
		element: <NotFound />
	}
]

const permissonRoutes = [
	{
		path: '/',
		element: <SubLayout />,
		children: [
			{
				path: 'practice',
				element: <Practice />,
				children: [
					{
						index: true,
						element: <Topic />
					},
					{
						path: 'submit',
						element: <Submit />
					},
					{
						path: 'discuss',
						element: <Discuss />
					},
					{
						path: 'solutions',
						element: <Solutions />
					},
					{
						path: '*',
						element: <NotFound />
					}
				]
			},
			{
				path: 'account',
				element: <Account />,
				children: [
					{
						index: true,
						element: <Profile />
					},
					{
						path: 'response',
						element: <Response />
					},
					{
						path: 'edit',
						element: <Edit />
					},
					{
						path: '*',
						element: <NotFound />
					}
				]
			},
			{
				path: 'Chat',
				element: <Chat />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]

const reviewerRoutes = [
	{
		path: '/',
		element: <SubLayout />,
		children: [
			{
				path: 'see-request',
				element: <SeeRequest />
			},
			{
				path: 'assignment-details',
				element: <AssignmentDetail />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]

const adminRoutes = [
	{
		path: '/',
		element: <SubLayout />,
		children: [
			{
				path: 'manage',
				element: <Manage />,
				children: [
					{
						index: true,
						element: <Statistics user={true} challenge={false} />
					},
					{
						path: 'statistics-challenge',
						element: <Statistics user={false} challenge={true} />
					},
					{
						path: 'list',
						element: <List />
					},
					{
						path: 'add',
						element: <div>Statistics Add users Component</div>
					},
					{
						path: 'edit',
						element: <div>Statistics Edit users Component</div>
					},
					{
						path: '*',
						element: <NotFound />
					}
				]
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]

const getRoutesByPermission = (permission = 'normal') => {
	switch (permission) {
		case 'admin': {
			return [...adminRoutes, ...reviewerRoutes, ...permissonRoutes, ...publicRoutes]
		}

		case 'reviewer': {
			return [...reviewerRoutes, ...permissonRoutes, ...publicRoutes]
		}

		case 'student': {
			return [...permissonRoutes, ...publicRoutes]
		}

		case 'normal': {
			return publicRoutes
		}

		default: {
			return publicRoutes
		}
	}
}

export default getRoutesByPermission

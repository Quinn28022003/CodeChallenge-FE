import { Outlet } from 'react-router-dom'

import MainLayout from '~/layouts/MainLayout'
import SubLayout from '~/layouts/SubLayout'
import Account from '~/pages/Account'
import AssignmentDetail from '~/pages/AssignmentDetail'
import ChallengePage from '~/pages/Challenge'
import Chat from '~/pages/Chat'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Practice from '~/pages/Practice'
import Register from '~/pages/Register'
import ReviewerPage from '~/pages/Reviewer'
import SeeRequest from '~/pages/SeeRequest'
import Discuss from './components/Discuss'
import Edit from './components/Edit'
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
		path: 'admin',
		element: (
			<div>
				<div>Account Page</div>
				<Outlet />
			</div>
		),
		children: [
			{
				index: true,
				element: <div>Statistics Users Component</div>
			},
			{
				path: 'add-users',
				element: <div>Statistics Add users Component</div>
			},
			{
				path: 'edit-users',
				element: <div>Statistics Edit users Component</div>
			},
			{
				path: 'delete-users',
				element: <div>Statistics Delete users Component</div>
			},
			{
				path: 'statistics-challenge',
				element: <div>Statistics Challenge Component</div>
			},
			{
				path: 'add-challenge',
				element: <div>Statistics Add Challenge Component</div>
			},
			{
				path: 'edit-challenge',
				element: <div>Statistics Edit Challenge Component</div>
			},
			{
				path: 'delete-challenge',
				element: <div>Statistics Delete Challenge Component</div>
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

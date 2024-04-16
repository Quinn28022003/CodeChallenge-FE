import { Outlet } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import Home from '~/pages/Home'

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
				element: <div>Reviewer Page</div>
			},
			{
				path: 'challenge',
				element: <div>Challenge Page</div>
			}
		]
	},
	{
		path: 'register',
		element: <div>Register page</div>
	},
	{
		path: 'login',
		element: <div>Login page</div>
	},
	{
		path: 'fractice',
		element: (
			<div>
				<div>Fractice page</div>
				<Outlet />
			</div>
		),
		children: [
			{
				index: true,
				element: <div>Component Topic</div>
			},
			{
				path: '*',
				element: (
					<div>
						<h1>404 Not Found!</h1>
					</div>
				)
			}
		]
	},
	{
		path: '*',
		element: (
			<div>
				<h1>404 Not Found!</h1>
			</div>
		)
	}
]

const permissonRoutes = [
	{
		path: 'fractice',
		element: (
			<div>
				<div>Fractice Page</div>
				<Outlet />
			</div>
		),
		children: [
			{
				index: true,
				element: <div>Component Topic</div>
			},
			{
				path: 'submit',
				element: <div>Component Submit</div>
			},
			{
				path: 'discuss',
				element: <div>Component Discuss</div>
			},
			{
				path: 'solutions',
				element: <div>Component Solutions</div>
			},
			{
				path: '*',
				element: (
					<div>
						<h1>404 Not Found!</h1>
					</div>
				)
			}
		]
	},
	{
		path: 'account',
		element: (
			<div>
				<div>Account Page</div>
				<Outlet />
			</div>
		),
		children: [
			{
				index: true,
				element: <div>Component Profile</div>
			},
			{
				path: 'response',
				element: <div>Component Response</div>
			},
			{
				path: 'edit',
				element: <div>Component Edit</div>
			},
			{
				path: '*',
				element: (
					<div>
						<h1>404 Not Found!</h1>
					</div>
				)
			}
		]
	},
	{
		path: 'Chat',
		element: <div>Chat Page</div>
	},
	{
		path: '*',
		element: (
			<div>
				<h1>404 Not Found!</h1>
			</div>
		)
	}
]

const reviewerRoutes = [
	{
		path: 'see-request',
		element: <div>See Request Page</div>
	},
	{
		path: 'assignment-details',
		element: <div>Assignment Details Page</div>
	},
	{
		path: '*',
		element: (
			<div>
				<h1>404 Not Found!</h1>
			</div>
		)
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
				element: (
					<div>
						<h1>404 Not Found!</h1>
					</div>
				)
			}
		]
	},
	{
		path: '*',
		element: (
			<div>
				<h1>404 Not Found!</h1>
			</div>
		)
	}
]

const getRoutesByPermission = (permission = 'admin') => {
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

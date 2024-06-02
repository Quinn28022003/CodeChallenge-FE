import { FacebookOutlined, GithubOutlined, GoogleOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { Link } from 'react-router-dom'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const list = [
	{
		key: 'pages',
		title: 'Pages',
		children: [
			{
				key: 'home',
				title: 'Trang chủ',
				path: '/'
			},
			{
				key: 'reviewer',
				title: 'Reviewer',
				path: '/reviewer'
			},
			{
				key: 'challenge',
				title: 'Thử thách',
				path: '/challenge'
			},
			{
				key: 'Chat',
				title: 'Trò chuyện',
				path: '/Chat'
			},
			{
				key: 'see-request',
				title: 'Xem yêu cầu',
				path: '/see-request'
			}
		]
	},
	{
		key: 'learn',
		title: 'Learn',
		children: [
			{
				key: 1,
				title: 'Các bài thao tác với mảng',
				path: ''
			},
			{
				key: 2,
				title: 'Bắt đầu với các bài tập cơ bản',
				path: ''
			},
			{
				key: 3,
				title: 'Thử thách với mức độ khó',
				path: ''
			},
			{
				key: 4,
				title: 'Tổng hợp thử thách về javascript',
				path: ''
			},
			{
				key: 5,
				title: 'Tập luyện các bài truy vấn mysql',
				path: ''
			}
		]
	},
	{
		key: 'about-us',
		title: 'About Us',
		children: [
			{
				key: 'description',
				title: `Tất cả các mục tiêu, sứ mệnh, lịch sử,
				giá trị và đội ngũ của chúng tôi đều tập trung vào việc mang lại giá trị tốt nhất cho khách hàng. 
				Chúng tôi cam kết cung cấp các sản phẩm và dịch vụ chất lượng nhất, 
				với sự tận tâm và sự chuyên nghiệp từ đội ngũ của chúng tôi. 
				Chúng tôi luôn lắng nghe và phản hồi mạnh mẽ để đảm bảo sự hài lòng của khách hàng. 
				Đừng ngần ngại liên hệ với chúng tôi để biết thêm thông tin.`,
				path: ''
			}
		]
	}
]

const Footer = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)

	return (
		<div className={styles.Footer}>
			<Space className="social-network-link">
				<img src="/assets/images/logo/logo_codeChallenge.png" alt="logo_codeChallenge" className="logo" />
				<p className="text">© 2024 - All rights reserved</p>
				<Space className="social-accounts">
					<Link to={'https://www.facebook.com/quan.hahoang.798/'} target="_blank">
						<Button type="primary" shape="circle" icon={<FacebookOutlined />} size="large" />
					</Link>
					<Link
						to={
							'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjfsdHFxvDftcQJFJdqRbLKGPWmtwfZSWNSFTHSVKzKmbxmRwJNsSqwjbGqmpHDfbNvVzh'
						}
						target="_blank"
					>
						<Button type="primary" shape="circle" icon={<GoogleOutlined />} size="large" />
					</Link>
					<Link to={'https://www.linkedin.com/in/ho%C3%A0ng-qu%C3%A2n-h%C3%A0-ba2b05304/'} target="_blank">
						<Button type="primary" shape="circle" icon={<LinkedinOutlined />} size="large" />
					</Link>
					<Link to={'https://github.com/Quinn28022003'} target="_blank">
						<Button type="primary" shape="circle" icon={<GithubOutlined />} size="large" />
					</Link>
				</Space>
			</Space>
			{list &&
				list.length > 0 &&
				list.map(element => (
					<ul className="list" key={element.key}>
						<li className={`title ${fontStyles['headline-5-regular-24px']}`}>{element.title}</li>
						{element.children &&
							element.children.length > 0 &&
							element.children.map(child => (
								<Link to={child.path} key={child.key}>
									<li className={`item ${fontStyles['subtitle-1']}`}>{child.title}</li>
								</Link>
							))}
					</ul>
				))}
		</div>
	)
}

export default Footer

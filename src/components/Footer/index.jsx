import { FacebookOutlined, GithubOutlined, GoogleOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { Link } from 'react-router-dom'

import useCommon from '~/hook/useCommon'
import { cssVars } from '~/theme'
import useStyles from './styles'

const list = [
	{
		key: 'pages',
		title: 'Pages',
		children: ['Trang chủ', 'Reviewer', 'Thử thách', 'Chat', 'Xem yêu cầu']
	},
	{
		key: 'learn',
		title: 'Learn',
		children: [
			'Các bài thao tác với mảng',
			'Bắt đầu với các bài tập cơ bản',
			'Thử thách với mức độ khó',
			'Tổng hợp thử thách về javascript',
			'Tập luyện các bài truy vấn mysql'
		]
	},
	{
		key: 'about-us',
		title: 'About Us',
		children: [
			`Tất cả các mục tiêu, sứ mệnh, lịch sử,
             giá trị và đội ngũ của chúng tôi đều tập trung vào việc mang lại giá trị tốt nhất cho khách hàng. 
             Chúng tôi cam kết cung cấp các sản phẩm và dịch vụ chất lượng nhất, 
             với sự tận tâm và sự chuyên nghiệp từ đội ngũ của chúng tôi. 
             Chúng tôi luôn lắng nghe và phản hồi mạnh mẽ để đảm bảo sự hài lòng của khách hàng. 
             Đừng ngần ngại liên hệ với chúng tôi để biết thêm thông tin.`
		]
	}
]

const Footer = () => {
	const { darkMode } = useCommon()
	const { styles } = useStyles()

	return (
		<div
			className={styles.Footer}
			style={{
				backgroundColor: `${darkMode === false ? '' : `${cssVars.colorDark}`}`
			}}
		>
			<Space className="social-network-link ">
				<img src="/public/assets/images/logo/logo_codeChallenge.png" alt="logo_codeChallenge" className="logo" />
				<p className={`text ${darkMode === false ? '' : 'text-dark-mode'}`}>© 2020 - All rights reserved</p>
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
						<li className={`title headline-5-regular-24px ${darkMode === false ? '' : 'title-dark-mode'}`}>
							{element.title}
						</li>
						{element.children &&
							element.children.length > 0 &&
							element.children.map(child => (
								<Link to={''} key={child}>
									<li className={`item Subtitle1 ${darkMode === false ? '' : 'item-dark-mode'}`}>{child}</li>
								</Link>
							))}
					</ul>
				))}
		</div>
	)
}

export default Footer

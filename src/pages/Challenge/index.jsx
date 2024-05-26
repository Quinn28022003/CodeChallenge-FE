import {
	AppstoreAddOutlined,
	CloseOutlined,
	ContainerOutlined,
	DownOutlined,
	FilterOutlined,
	FontSizeOutlined,
	PieChartOutlined,
	RightOutlined,
	SearchOutlined
} from '@ant-design/icons'
import { Button, Flex, Input, Menu } from 'antd'
import { useEffect, useState } from 'react'

import Challenge from '~/components/Challenge'
import Script from '~/components/Script'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useText from '~/hook/useText'
import useStyles from './styles'

const items = [
	{
		key: 'language',
		icon: <FontSizeOutlined />,
		label: 'Ngôn ngữ',
		children: [
			{
				key: 'javascript',
				label: 'Javascript'
			},
			{
				key: 'typescript',
				label: 'Typescript'
			},
			{
				key: 'java',
				label: 'Java'
			},
			{
				key: 'cpp',
				label: 'C++'
			},
			{
				key: 'php',
				label: 'Php'
			},
			{
				key: 'cSharp',
				label: 'C Sharp'
			}
		]
	},
	{
		key: 'topics',
		icon: <AppstoreAddOutlined />,
		label: 'Chủ đề'
	},
	{
		key: 'difficult',
		icon: <ContainerOutlined />,
		label: 'Độ khó',
		children: [
			{
				key: 'easy',
				label: 'Cơ bản'
			},
			{
				key: 'medium',
				label: 'trung bình'
			},
			{
				key: 'hard',
				label: 'khó'
			}
		]
	},
	{
		key: 'latest',
		icon: <PieChartOutlined />,
		label: 'Mới nhất'
	}
]

const ChallengePage = () => {
	const { innerWidth } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const { title, description } = useText()
	const [isShowListTopics, setIsShowListTopics] = useState(false)

	useEffect(() => {
		if (innerWidth > 992) {
			setIsSelect(true)
		}
	}, [innerWidth])

	const handleOnlickBtnShowTopics = () => {
		setIsShowListTopics(!isShowListTopics)
	}

	const [isSelect, setIsSelect] = useState(false)
	const handleOnlickShowSelect = () => {
		setIsSelect(!isSelect)
	}

	const onClick = e => {
		console.log(e.key)
	}

	return (
		<div className={`${styles.ChallengePage}`}>
			<div className="container">
				<div className="content-text">
					<h2 className={`title ${title}`}>Trãi nghiệm</h2>
					<h5 className={`description ${description}`}>
						Hãy viết một đoạn code đơn giản để trãi nghiệm trước khi bắt tay vào làm những bài thử thách ở bên dưới.
					</h5>
				</div>
				<Script demo />
				<div className="content">
					<div className="topics">
						<Flex
							wrap
							gap="small"
							className="list-topics"
							style={{
								height: `${isShowListTopics === false ? '40px' : 'auto'}`
							}}
						>
							{Array.from(
								{
									length: 24
								},
								(_, i) => (
									<Button key={i} type="primary" size="large">
										Button
									</Button>
								)
							)}
						</Flex>
						{isShowListTopics === false ? (
							<Button
								icon={<RightOutlined />}
								onClick={handleOnlickBtnShowTopics}
								type="primary"
								size="large"
								className="btn"
							/>
						) : (
							<Button
								icon={<DownOutlined />}
								onClick={handleOnlickBtnShowTopics}
								type="primary"
								size="large"
								className="btn"
							/>
						)}
					</div>
					<div className="content-select-challenge">
						<div className="select">
							<Button
								type="primary"
								onClick={handleOnlickShowSelect}
								style={{
									marginBottom: 16
								}}
								className="btn"
								size="large"
							>
								Filter
								<FilterOutlined />
							</Button>
							{isSelect === true ? (
								<Menu
									defaultSelectedKeys={['1']}
									defaultOpenKeys={['sub1']}
									mode="inline"
									items={items}
									className="menu"
									onClick={onClick}
									theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
								/>
							) : null}
						</div>
						<div className="challenge">
							<div className="header">
								<div className="filter-container">
									{Array.from(
										{
											length: 3
										},
										(_, i) => (
											<Button key={i} type="primary" size="middle" className="btn">
												Button
												<CloseOutlined />
											</Button>
										)
									)}
								</div>
								<Input size="large" prefix={<SearchOutlined />} className="input" />
							</div>
							<Challenge />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChallengePage

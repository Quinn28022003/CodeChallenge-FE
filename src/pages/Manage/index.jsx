import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Col, Menu, Row } from 'antd'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import { checkValueArray } from '~/utils/checkValueArray'
import useStyles from './styles'

const itemsChallenge = [
	{
		key: 'statistics-challenge',
		label: 'Thống kê'
	},
	{
		key: 'language',
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
			},
			{
				key: 'pythod',
				label: 'Pythod'
			}
		]
	},
	{
		key: 'tag',
		label: 'Thẻ',
		children: [
			{
				key: 'array',
				label: 'Array'
			},
			{
				key: 'Hash table',
				label: 'Hash table'
			},
			{
				key: 'number',
				label: 'Number'
			}
		]
	},
	{
		key: 'difficult',
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
		key: 'deleted-challenge',
		label: 'Đã xóa'
	},
	{
		key: 'edit-challenge',
		label: 'Chỉnh sửa'
	},
	{
		key: 'add-challenge',
		label: 'Thêm mới'
	},
	{
		key: 'latest-challenge',
		label: 'Mới nhất'
	}
]

const itemsUser = [
	{
		key: 'statistic-user',
		label: 'Thống kê'
	},
	{
		key: 'gender',
		label: 'giới tính',
		children: [
			{
				key: 'female',
				label: 'Female'
			},
			{
				key: 'male',
				label: 'Male'
			},
			{
				key: 'other',
				label: 'Other'
			}
		]
	},
	{
		key: 'role',
		label: 'Vai trò',
		children: [
			{
				key: 'student',
				label: 'Student'
			},
			{
				key: 'reviewer',
				label: 'Reviewer'
			},
			{
				key: 'admin',
				label: 'Admin'
			}
		]
	},
	{
		key: 'deleted-user',
		label: 'Đã xóa'
	},
	{
		key: 'edit-user',
		label: 'Chỉnh sửa'
	},
	{
		key: 'add-user',
		label: 'Thêm mới'
	},
	{
		key: 'latest-user',
		label: 'Mới nhất'
	}
]

const Manage = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { handleChangeLoading } = useLoading()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [spanContent, setSpanContent] = useState()
	const [spanMenu, setSpanMenu] = useState()
	const [showMenu, setShowMenu] = useState(false)
	const [currentMenuKey, setCurrentMenuKey] = useState('statistic-user')
	const [language, setLanguage] = useState([])
	const [tag, setTag] = useState([])
	const [difficult, setDifficult] = useState([])
	const [gender, setGender] = useState([])
	const [role, setRole] = useState([])

	useEffect(() => {
		if (language.length > 0 || tag.length > 0 || difficult.length > 0 || gender.length > 0 || role.length > 0) {
			let queryLanguage = ''
			// let queryTag = ''
			language.forEach((element, index) => {
				if (language.length - 1 !== index) {
					queryLanguage += `${element},`
				} else {
					queryLanguage += `${element}`
				}
			})
			// tag.forEach((element, index) => {
			// 	if (tag.length - 1 !== index) queryTag += `${element},`
			// 	else queryTag += `${element}`
			// })

			handleChangeLoading(`/manage/list?language=${queryLanguage}`)
		}
	}, [language, tag, difficult, gender, role])

	const onClick = e => {
		setCurrentMenuKey(e.key)
		switch (e.key) {
			case 'statistic-user': {
				handleChangeLoading('/manage')
				setLanguage([])
				setTag([])
				setDifficult([])
				setGender([])
				setRole([])
				break
			}
			case 'statistics-challenge': {
				handleChangeLoading('/manage/statistics-challenge')
				setLanguage([])
				setTag([])
				setDifficult([])
				setGender([])
				setRole([])
				break
			}
			case 'javascript': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'typescript': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'java': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'pythod': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'cSharp': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'php': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'cpp': {
				const check = checkValueArray(language, e.key)
				if (check === false) {
					setLanguage([...language, e.key])
				}
				break
			}
			case 'edit-user':
				handleChangeLoading('edit-user')
				break
			case 'add-user':
				handleChangeLoading('add-user')
				break
			case 'add-challenge':
				handleChangeLoading('add-challenge')
				break
			case 'edit-challenge':
				handleChangeLoading('edit-challenge')
				break
		}
	}

	const handleOnclickShowMenu = () => setShowMenu(!showMenu)

	useEffect(() => {
		if (innerWidth > 992) {
			setSpanContent(15)
			setSpanMenu(4)
		} else if (innerWidth < 992 && innerWidth > 768) {
			setSpanContent(17)
			setSpanMenu(6)
		} else {
			setSpanContent(24)
			setSpanMenu(24)
		}
	}, [innerWidth])

	return (
		<div className={`${styles.Manage}`}>
			<Row className="row">
				{showMenu === false && innerWidth < 768 ? null : (
					<Col className="col" span={spanMenu}>
						<div className="container-menu">
							<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Thử thách</h5>
							<Menu
								selectedKeys={[currentMenuKey]}
								mode="inline"
								items={itemsChallenge}
								className="menu"
								onClick={onClick}
								theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
							/>
							{innerWidth < 992 ? (
								<>
									<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Người dùng</h5>
									<Menu
										selectedKeys={[currentMenuKey]}
										mode="inline"
										items={itemsUser}
										className="menu"
										onClick={onClick}
										theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
									/>
								</>
							) : null}
						</div>
					</Col>
				)}
				{showMenu === false ? (
					<Col className="col" span={spanContent}>
						<div className="content">
							<Outlet currentMenuKey={currentMenuKey} />
						</div>
					</Col>
				) : null}
				{innerWidth > 992 ? (
					<Col className="col container-menu" span={4}>
						<div className="container-menu">
							<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Người dùng</h5>
							<Menu
								selectedKeys={[currentMenuKey]}
								mode="inline"
								items={itemsUser}
								className="menu"
								onClick={onClick}
								theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
							/>
						</div>
					</Col>
				) : null}
			</Row>
			{innerWidth < 768 ? (
				<Button
					className="btn-show-menu"
					type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
					onClick={handleOnclickShowMenu}
				>
					{showMenu === false ? <UpOutlined /> : <DownOutlined />}
				</Button>
			) : null}
		</div>
	)
}

export default Manage

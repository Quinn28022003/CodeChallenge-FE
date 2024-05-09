import { Button, Input, Menu } from 'antd'
import { useState } from 'react'

import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const items = [
	{
		label: 'Trường hợp 1',
		key: 'case-1'
	},
	{
		label: 'Trường hợp 2',
		key: 'case-2'
	},
	{
		label: 'Trường hợp 3',
		key: 'case-3'
	}
]

const Result = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [current, setCurrent] = useState('case-1')

	const onClick = e => {
		console.log('click ', e)
		setCurrent(e.key)
	}

	return (
		<div className={`${styles.Result}`}>
			<header className="result-header">
				<Menu
					onClick={onClick}
					className="menu"
					theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
					selectedKeys={[current]}
					mode="horizontal"
					items={items}
				/>
				<Button danger className="btn-error">
					Đáp án sai
				</Button>
			</header>
			<div className="content">
				<h6 className={`title ${fontStyles['body-1']}`}>Hy vọng đầu ra:</h6>
				<Input className="input" readOnly />

				<h6 className={`title ${fontStyles['body-1']}`}>Đầu vào:</h6>
				<Input className="input" readOnly />

				<h6 className={`title ${fontStyles['body-1']}`}>Đầu ra:</h6>
				<Input className="input" readOnly />
			</div>
		</div>
	)
}

export default Result

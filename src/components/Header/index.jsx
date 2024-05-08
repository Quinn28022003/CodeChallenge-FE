import { BellOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import PropTypes from 'prop-types'

import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useNavigation from '~/hook/useNavigation'
import AuthButtons from '../AuthButtons'
import UserMenu from '../UserMenu'
import useStyles from './styles'

const Header = ({ handleChangeLoading }) => {
	const { innerWidth, isLoggedIn } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { showNav, handleChangeShowNav } = useNavigation()
	const { styles } = useStyles(darkModeLocalStorage)

	const handleOnclickBtnMenu = () => {
		handleChangeShowNav(!showNav)
	}

	return (
		<>
			<div className={styles.Header}>
				<div className="header-container">
					<img src="/assets/images/logo/logo_codeChallenge.png" alt="CodeChallenge" className="logo" />
					{innerWidth > 1024 ? (
						<div className="content-between">
							<SwitchComponent />
						</div>
					) : null}
					<Space className="content-right">
						<Button ghost={darkModeLocalStorage} className="hoverButton" icon={<BellOutlined />} onClick={() => {}} />
						<Button ghost={darkModeLocalStorage} className="hoverButton" icon={<SearchOutlined />} onClick={() => {}} />
						{innerWidth > 1024 ? (
							<>
								{isLoggedIn === false ? (
									<AuthButtons handleChangeLoading={handleChangeLoading} />
								) : (
									<UserMenu handleChangeLoading={handleChangeLoading} />
								)}
							</>
						) : (
							<Button
								ghost={darkModeLocalStorage}
								className="hoverButton"
								icon={<MenuOutlined />}
								onClick={() => {
									handleOnclickBtnMenu()
								}}
							/>
						)}
					</Space>
				</div>
			</div>
		</>
	)
}

Header.propTypes = {
	handleChangeLoading: PropTypes.func.isRequired
}

export default Header

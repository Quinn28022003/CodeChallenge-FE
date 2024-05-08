import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'antd-style'
import PropTypes from 'prop-types'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import EmptyData from '~/components/EmptyData'
import GlobalStyles from '~/components/GlobalStyles'
import store from '~/store'
import theme, { customToken } from '~/theme'

// Locale
import viVN from 'antd/locale/vi_VN'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'

dayjs.locale('vi')

const Providers = ({ children }) => (
	<BrowserRouter>
		<StoreProvider store={store}>
			<ToastContainer draggable={false} autoClose={3000} position="top-left" />

			<ThemeProvider theme={theme} customToken={customToken}>
				<GlobalStyles />
				<ConfigProvider locale={viVN} renderEmpty={EmptyData}>
					{children}
				</ConfigProvider>
			</ThemeProvider>
		</StoreProvider>
	</BrowserRouter>
)

Providers.propTypes = {
	children: PropTypes.node
}

export default Providers

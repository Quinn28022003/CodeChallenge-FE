import { createRoot } from 'react-dom/client'

import App from '~/App'
import Providers from '~/components/Providers'

const root = createRoot(document.querySelector('#root'))

root.render(
	<Providers>
		<App />
	</Providers>
)

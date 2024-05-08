export const getScrollbarStyles = innerWidth => {
	if (innerWidth > 992) {
		return {
			'::-webkit-scrollbar': {
				width: '10px'
			},
			'::-webkit-scrollbar-track': {
				background: 'white',
				borderRadius: '10px'
			},
			'::-webkit-scrollbar-thumb': {
				background: '#b2b2b2',
				borderRadius: '10px'
			},
			'::-webkit-scrollbar-thumb:hover': {
				background: '#b2b2b2',
				cursor: 'pointer'
			}
		}
	} else {
		return {
			'::-webkit-scrollbar': {
				width: '6px'
			},
			'::-webkit-scrollbar-track': {
				background: 'white',
				borderRadius: '10px'
			},
			'::-webkit-scrollbar-thumb': {
				background: '#b2b2b2',
				borderRadius: '10px'
			},
			'::-webkit-scrollbar-thumb:hover': {
				background: '#b2b2b2',
				cursor: 'pointer'
			}
		}
	}
}

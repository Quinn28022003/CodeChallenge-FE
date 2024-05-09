import { Button, Col, Menu, Row, Space, Spin } from 'antd'
import Proptypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

import { FontSizeOutlined, ReloadOutlined } from '@ant-design/icons'
import { Editor } from '@monaco-editor/react'
import { toast } from 'react-toastify'
import { executeCode } from '~/api/executeCode'
import { CODE_SNIPPETS } from '~/constants/code_snippets'
import { fontStyles } from '~/constants/fontStyles'
import { LANGUAGE_VERSIONS } from '~/constants/language'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import Result from './Result'
import useStyles from './styles'

const Script = ({ demo }) => {
	const { innerWidth } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		innerWidth,
		darkModeLocalStorage,
		demo
	})
	const [result, setResult] = useState(null)
	const editorRef = useRef()
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [list] = useState(() => {
		const language = Object.entries(LANGUAGE_VERSIONS)
		const data = []

		language.map(([language, version]) => {
			data.push({
				key: language,
				label: language + ' ' + version
			})
			return true
		})

		return data
	})
	const [languageVersion, setLanguageVersion] = useState(list[0].label)
	const [language, setLanguage] = useState(list[0].key)
	const [value, setValue] = useState(CODE_SNIPPETS[`${list[0].key}`])
	const [items, setItems] = useState([
		{
			label: languageVersion,
			key: 'language',
			icon: <FontSizeOutlined />,
			children: list
		}
	])

	useEffect(() => {
		setItems([
			{
				label: languageVersion,
				key: 'language',
				icon: <FontSizeOutlined />,
				children: list
			}
		])
	}, [language, languageVersion, list])

	const onMount = editor => {
		editorRef.current = editor
		editor.focus()
	}

	const onClick = e => {
		const selectedLanguage = list.find(item => item.key === e.key)
		setLanguageVersion(selectedLanguage.label)
		setLanguage(selectedLanguage.key)
		setValue(CODE_SNIPPETS[`${selectedLanguage.key}`])
	}

	const HandleRunCode = async () => {
		setResult(null)
		const sourceCode = editorRef.current.getValue()
		if (!sourceCode) {
			return
		}
		try {
			setIsLoading(true)
			const response = await executeCode(sourceCode, language, error => {
				throw error
			})
			console.log('response: ', response)

			setResult(response.run.output.split('\n'))

			response.run.stderr ? setIsError(true) : setIsError(false)
		} catch (error) {
			console.log(error)
			toast({
				title: 'An error occurred.',
				description: error.message || 'Unable to run code',
				status: 'error',
				duration: 6000
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={`${styles.Script}`}>
			<Row className="row">
				<Col md={24} lg={demo === true ? 11 : 24} className="col">
					<div className="content-select">
						{demo === true ? <h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Language</h5> : null}
						<Menu
							className="select"
							theme={`${darkModeLocalStorage === true ? 'dark' : 'light'}`}
							selectedKeys={'quinn'}
							onClick={onClick}
							mode="horizontal"
							items={items}
						/>
						<Space className="container-btn">
							<Button size="large" type={`${darkModeLocalStorage === true ? 'primary' : ''}`}>
								<ReloadOutlined />
							</Button>
							<Button
								loading={isLoading}
								size="large"
								type={`${darkModeLocalStorage === true ? 'primary' : ''}`}
								className="btn"
								onClick={HandleRunCode}
							>
								Run code
							</Button>
						</Space>
					</div>
					<Editor
						className="editor"
						theme={`${darkModeLocalStorage === true ? 'vs-dark' : ''}`}
						language={language}
						defaultLanguage={language}
						defaultValue="// some comment"
						value={value}
						onMount={onMount}
						onChange={(value, e) => setValue(value)}
					/>
				</Col>
				<Col md={24} lg={demo === true ? 11 : 24} className="col">
					{demo === true ? (
						<div className="output">
							<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Kết quả</h5>
							<Button loading={isLoading} type="primary" size="large" className="btn" onClick={HandleRunCode}>
								Run code
							</Button>
							<Spin spinning={isLoading}>
								<div className="content">
									<ul className="list">
										{result === null ? (
											isLoading === false ? (
												<li className="item">Click &quot;Run code&quot; to see the output here</li>
											) : (
												<li className="item">Loading...</li>
											)
										) : (
											result &&
											result.length > 0 &&
											result.map((element, index) => (
												<li
													className="item"
													key={index}
													style={{
														color: `${isError === false ? '' : 'red'}`
													}}
												>
													{element}
												</li>
											))
										)}
									</ul>
								</div>
							</Spin>
						</div>
					) : (
						<Result />
					)}
				</Col>
			</Row>
		</div>
	)
}

Script.propTypes = {
	demo: Proptypes.bool
}

export default Script

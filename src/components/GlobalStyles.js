import { createGlobalStyle } from 'antd-style'

const GlobalStyles = createGlobalStyle`
  // Overwrite react-toastify vars
  :root {
    --toastify-color-info: ${globalTheme => globalTheme.theme.colorInfo};
    --toastify-color-success: ${globalTheme => globalTheme.theme.colorSuccess};
    --toastify-color-warning: ${globalTheme => globalTheme.theme.colorWarning};
    --toastify-color-error: ${globalTheme => globalTheme.theme.colorError};
    --toastify-font-family: ${globalTheme => globalTheme.theme.fontFamily};
    --toastify-text-color-info: ${globalTheme => globalTheme.theme.colorError};
  }
`

export default GlobalStyles

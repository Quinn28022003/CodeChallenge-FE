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

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    margin: 0;
  }
  
  h1 {
    font-size: 90px;
    font-weight: 500;
  }

  h2 {
    font-size: 60px;
    font-weight: 500;
  }

  h2.italic {
    font-size: 60px;
    font-weight: 500;
    font-style: italic;
  }

  h3 {
    font-size: 48px;
    font-weight: 600;
  }

  h3.italic {
    font-size: 48px;
    font-weight: 600;
    font-style: italic;
  }

  h4 {
    font-size: 34px;
    font-weight: 600;
  }

  h4.italic {
    font-size: 34px;
    font-weight: 600;
    font-style: italic;
  }

  h5 {
    font-size: 24px;
    font-weight: 600;
  }

  h5.italic {
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
  }

  h6 {
    font-size: 20px;
    font-weight: 700;
  }

  h6.italic {
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
  }

  .Subtitle1 {
    font-size: 16px;
    font-weight: 600;
  }

  .Subtitle1.italic {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
  }

  .Subtitle2 {
    font-size: 14px;
    font-weight: 700;
  }

  .Body1 {
    font-size: 16px;
    font-weight: 600;
  }

  .Body2 {
    font-size: 14px;
    font-weight: 600;
  }

  .BUTTON {
    font-size: 14px;
    font-weight: 700;
  }

  .Caption {
    font-size: 12px;
    font-weight: 600;
  }

  .OVERLINE {
    font-size: 10px;
    font-weight: 600;
  }
`

export default GlobalStyles

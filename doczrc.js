// doczrc.js
export default {
  title: '💎 Design System',
  description: '💎 Design System',
  src: './src/',
  dest: 'build',
  indexHtml: './public/index.html',
  hashRouter: true,

  themeConfig: {
    showPlaygroundEditor: true,

    colors: {
      white: '#FFFFFF',
      grayExtraLight: '#FAFBFC',
      grayLight: '#D7DBE0',
      gray: '#7D899C',
      grayDark: '#758397',
      grayExtraDark: '#344154',
      dark: '#13161F',
      blue: '#3575D3',
      primary: '#3575D3',
      skyBlue: '#1FB6FF',
    },

    styles: {
      body: {
        fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      list: {
        listStyle: 'disc',
      },
    },
  },
};

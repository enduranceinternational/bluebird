// doczrc.js
export default {
  // TODO: replace emoji with bluehost icon?
  title: '💎 Design System',
  description: '💎 Design System',

  src: './src/',
  dest: 'build',

  indexHtml: './public/index.html',

  // use hashrouter so hitting 'refresh' in our external app doesn't 404
  hashRouter: true,

  themeConfig: {
    // mode: 'dark', // you can use: 'dark' or 'light'
    // codemirrorTheme: 'docz-dark',
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
      list: {
        listStyle: 'disc',
      },
    },
  },
};

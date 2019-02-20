// doczrc.js
export default {
  title: "💎 Design System",
  description: "💎 Design System",
  src: "./src/",
  dest: "build",
  indexHtml: "./public/index.html",
  hashRouter: true,

  menu: [
    {
      name: "Getting Started",
      menu: ["Introduction", "Getting Started"]
    },
    "Foundations",
    "Components",
    "Component Status",
    "FAQ",
    "Release Notes",
    "Resources",
    "Roadmap",
    "Support",
    "Utility Classes"
  ],

  themeConfig: {
    /**
     * Mode
     */
    mode: "light", // you can use: 'dark' or 'light'
    /**
     * Show/hide Playground editor by default
     */
    showPlaygroundEditor: true,
    /**
     * Set the numbers of max lines before scroll editor
     */
    linesToScrollEditor: 14,
    /**
     * Customize codemirror theme
     */
    codemirrorTheme: "docz-light",
    /**
     * Logo
     */
    // logo: {
    //   src: null,
    //   width: null
    // },
    /**
     * Radius
     */
    radii: "4px",
    /**
     * Colors (depends on select mode)
     */
    colors: {
      white: "#FFFFFF",
      grayExtraLight: "#FAFBFC",
      grayLight: "#D7DBE0",
      gray: "#7D899C",
      grayDark: "#758397",
      grayExtraDark: "#344154",
      dark: "#13161F",
      blue: "#3575D3",
      primary: "#3575D3",
      skyBlue: "#1FB6FF",
      link: "#3575D3",
      text: "#576373"
      // footerText: colors.grayDark,
      // sidebarBg: colors.grayExtraLight,
      // sidebarText: colors.dark,
      // sidebarHighlight: null,
      // sidebarBorder: colors.grayLight,
      // background: colors.white,
      // border: colors.grayLight,
      // theadColor: colors.gray,
      // theadBg: colors.grayExtraLight,
      // tableColor: colors.dark,
      // codeBg: lighten(0.02, colors.grayExtraLight),
      // codeColor: colors.gray,
      // preBg: colors.grayExtraLight,
      // blockquoteBg: colors.grayExtraLight,
      // blockquoteBorder: colors.grayLight,
      // blockquoteColor: colors.gray
    },

    /**
     * Styles
     */
    styles: {
      body: {
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 16,
        lineHeight: 1.6
      },
      // container: {
      //   width: ["100%", "100%", 920],
      //   padding: ["20px", "0 40px 40px"]
      // },
      h1: {
        margin: ["30px 0 20px", "60px 0 20px", "40px 0"],
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: [36, 42, 48],
        fontWeight: 100,
        letterSpacing: "-0.02em"
      },
      h2: {
        margin: ["20px 0 20px", "35px 0 20px"],
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        lineHeight: ["1.2em", "1.5em"],
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: "-0.02em"
      },
      h3: {
        margin: "25px 0 10px",
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: [22, 24],
        fontWeight: 400
      },
      h4: {
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 20,
        fontWeight: 400
      },
      h5: {
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 18,
        fontWeight: 400
      },
      h6: {
        fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 16,
        fontWeight: 400
      },
      list: {
        listStyle: "disc",
        padding: 0,
        margin: "10px 0 10px 20px"
      },
      playground: {
        padding: ["1.5em", "2em"]
      },
      code: {
        margin: "0 3px",
        padding: "4px 6px",
        borderRadius: "3px",
        fontFamily: '"Source Code Pro", monospace',
        fontSize: "0.85em"
      },
      pre: {
        fontFamily: '"Source Code Pro", monospace',
        fontSize: 14,
        lineHeight: 1.8
      },
      paragraph: {
        margin: "10px 0 30px"
      },
      table: {
        overflowY: "hidden",
        overflowX: ["initial", "initial", "initial", "hidden"],
        display: ["block", "block", "block", "table"],
        width: "100%",
        marginBottom: [20, 40],
        fontFamily: '"Source Code Pro", monospace',
        fontSize: 14
      },
      blockquote: {
        margin: "25px 0",
        padding: "20px",
        fontStyle: "italic",
        fontSize: 18
      }
    }
  }
};

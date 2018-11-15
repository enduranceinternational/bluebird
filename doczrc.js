// doczrc.js
export default {
  title: 'UAF UI Library',
  description: 'Bluerock component library and style guide',

  src: './src/',
  dest: 'build',

  indexHtml: './public/index.html',

  // use hashrouter so hitting 'refresh' in our external app doesn't 404
  hashRouter: true,
};

import React from 'react';

export class PlayGroundCustomProps extends React.Component {
  componentDidMount = () => {
    const playGroundShowEditor = document.querySelectorAll('[title="Show editor"]');
    playGroundShowEditor.forEach(playGroundEditor => {
      playGroundEditor.click();
    });
  }
  render = () => (null)
}

export default PlayGroundCustomProps;
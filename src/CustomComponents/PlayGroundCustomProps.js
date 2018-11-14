import React from 'react';

// Todo: Make this work like other React components, rather than just clicking on existing ones
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
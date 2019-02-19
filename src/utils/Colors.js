import React from 'react';

export const Swatch = ({ color, style }) => (
  <div style={{
    backgroundColor: color || '#000',
    height: '50px',
    width: '50px',
    ...style,
  }} />
);

const Box = ({ styleProps, children }) => (
  <div
    style={{
      width: '30%',
      textAlign: 'center',
      content: "",
      display: 'block',
      padding: '2% 0',
      ...styleProps
    }}
  >
    {children}
  </div>
)

const setPalette = (color) => ({ backgroundColor: color });

const paletteMap = {
  primary: { color: '#d8d8d8', text: 'Primary'},
  darkGreen: { color: '#009013', text: 'Dark Green' },
  background: { color: '#f1f5f7', text: 'Background' },
}

const feedbackMap = {
  actionGreen: { color: '#17b212', text: 'Action Green' },
  actionDanger: { color: '#f72f26', text: 'Action Danger' },
  actionWarning: { color: '#f89c24', text: 'Action Warning' }
};

const neutralMap = {
  darkGray: { color: '#5c5c5c', text: 'Dark Gray' },
  lightGray: { color: '#9a9a9a', text: 'Light Gray' },
  lightestGray: { color: '#fafbfc', text: 'Lightest Gray' },
  borderGray: { color: '#d7dbe0', text: 'Border Gray' },
  white: { color: '#ffffff', text: 'White' }
};

const Color = (colorMap) => (
  <React.Fragment>
    {Object.keys(colorMap).map((color) => (
      <Box styleProps={setPalette(colorMap[color].color)}>
        {colorMap[color].text}
        <br />
        {colorMap[color].color}
      </Box>
    ))}
  </React.Fragment>
)

const Palette = () => (Color(paletteMap));
const Feedback = () => (Color(feedbackMap));
const Neutral = () => (Color(neutralMap));

export default {
  Palette,
  Feedback,
  Neutral,
};

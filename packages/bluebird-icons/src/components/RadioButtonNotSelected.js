import React from 'react';

const SvgRadioButtonNotSelected = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z"
        id="Radio-button-not-selected_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="currentColor" xlinkHref="#Radio-button-not-selected_svg__a" />
    </g>
  </svg>
);

export default SvgRadioButtonNotSelected;

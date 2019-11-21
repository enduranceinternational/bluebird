import React from 'react';

const SvgCheckboxSelected = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M19.778 2H4.222C3 2 2 3 2 4.222v15.556C2 21 3 22 4.222 22h15.556C21 22 22 21 22 19.778V4.222C22 3 21 2 19.778 2zM10.11 17.556l-5-4.808 1.4-1.346 3.6 3.461 7.6-7.307 1.4 1.346-9 8.654z"
        id="Checkbox-selected_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="currentColor" xlinkHref="#Checkbox-selected_svg__a" />
    </g>
  </svg>
);

export default SvgCheckboxSelected;

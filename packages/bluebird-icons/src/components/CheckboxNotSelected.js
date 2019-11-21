import React from 'react';

const SvgCheckboxNotSelected = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M19.778 2C21 2 22 3 22 4.222v15.556C22 21 21 22 19.778 22H4.222C3 22 2 21 2 19.778V4.222C2 3 3 2 4.222 2zm.022 2H4.2a.2.2 0 00-.2.2v15.6c0 .11.09.2.2.2h15.6a.2.2 0 00.2-.2V4.2a.2.2 0 00-.2-.2z"
        id="Checkbox-not-selected_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="currentColor" xlinkHref="#Checkbox-not-selected_svg__a" />
    </g>
  </svg>
);

export default SvgCheckboxNotSelected;

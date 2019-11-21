import React from 'react';

const SvgCheckboxDisabled = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M4.222 2h15.556a2.23 2.23 0 012.216 2.064l.006.158v15.556a2.23 2.23 0 01-2.064 2.216l-.158.006H4.222a2.23 2.23 0 01-2.216-2.064L2 19.778V4.222a2.23 2.23 0 012.064-2.216L4.222 2h15.556zM19.8 4H4.2a.2.2 0 00-.193.147L4 4.2v15.6a.2.2 0 00.147.193L4.2 20h15.6a.2.2 0 00.193-.147L20 19.8V4.2a.2.2 0 00-.2-.2zM18 11v2H6v-2h12z"
        id="Checkbox-disabled_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="currentColor" xlinkHref="#Checkbox-disabled_svg__a" />
    </g>
  </svg>
);

export default SvgCheckboxDisabled;

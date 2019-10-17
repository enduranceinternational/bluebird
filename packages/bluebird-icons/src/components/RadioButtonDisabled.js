import React from 'react';

const SvgRadioButtonDisabled = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 110 10 5 5 0 010-10z"
        id="Radio-button-disabled_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      xlinkHref="#Radio-button-disabled_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRadioButtonDisabled;

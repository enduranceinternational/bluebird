import React from 'react';

const SvgEllipsis = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 10.125a1.875 1.875 0 11-.001 3.751A1.875 1.875 0 0112 10.125zm-1.875-4.063a1.875 1.875 0 103.751 0 1.875 1.875 0 00-3.751 0zm0 11.875a1.875 1.875 0 103.751 0 1.875 1.875 0 00-3.751 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgEllipsis;

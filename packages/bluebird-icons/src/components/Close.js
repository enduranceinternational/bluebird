import React from 'react';

const SvgClose = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M14.121 12l6.41-6.41 1.322-1.322a.5.5 0 000-.707L20.44 2.147a.5.5 0 00-.707 0L12 9.879 4.268 2.146a.5.5 0 00-.707 0L2.146 3.561a.5.5 0 000 .707L9.88 12l-7.733 7.732a.5.5 0 000 .707l1.415 1.414a.5.5 0 00.707 0L12 14.121l6.41 6.41 1.322 1.322a.5.5 0 00.707 0l1.414-1.414a.5.5 0 000-.707L14.121 12z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgClose;

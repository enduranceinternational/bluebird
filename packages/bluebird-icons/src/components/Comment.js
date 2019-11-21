import React from 'react';

const SvgComment = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      d="M19.5 2h-15A2.502 2.502 0 002 4.5v11.25c0 1.379 1.121 2.5 2.5 2.5h3.75v3.281a.467.467 0 00.746.375l4.879-3.656H19.5c1.379 0 2.5-1.121 2.5-2.5V4.5C22 3.121 20.879 2 19.5 2zm.625 13.75a.627.627 0 01-.625.625h-6.25l-.5.375-2.625 1.969v-2.344H4.5a.627.627 0 01-.625-.625V4.5c0-.344.281-.625.625-.625h15c.344 0 .625.281.625.625v11.25z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComment;

import { css, cx, keyframes } from '@emotion/css';
import React from 'react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = ({ className, strokeWidth, width = 16, ...props }: any) => {
  return (
    <svg
      viewBox='0 0 1024 1024'
      focusable='false'
      xmlns='http://www.w3.org/2000/svg'
      fill='#3b4368'
      stroke='#3b4368'
      strokeWidth={strokeWidth}
      {...props}
      className={cx(
        className,
        css`
          width: ${width}px;
          animation: ${spin} 1s infinite linear;
        `
      )}
    >
      <path d='M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'></path>
    </svg>
  );
};

export default LoadingIcon;

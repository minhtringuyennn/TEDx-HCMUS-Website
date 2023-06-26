import { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.1286 6.57153C42.6414 6.36642 43.2234 6.61583 43.4285 7.12862L48.4285 19.6286C48.6336 20.1414 48.3842 20.7234 47.8714 20.9285C47.3586 21.1336 46.7767 20.8842 46.5715 20.3714L41.9429 8.79987L11.6214 20.9285C11.1086 21.1336 10.5267 20.8842 10.3215 20.3714C10.1164 19.8586 10.3658 19.2766 10.8786 19.0715L42.1286 6.57153Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 20C4 19.4477 4.44772 19 5 19H55C55.5523 19 56 19.4477 56 20V27.5C56 28.0523 55.5523 28.5 55 28.5C51.6238 28.5 48.5 30.7153 48.5 34.375C48.5 36.2759 49.3171 38.0682 50.5697 39.3904C51.8283 40.7189 53.4543 41.5 55 41.5C55.5523 41.5 56 41.9477 56 42.5V50C56 50.5523 55.5523 51 55 51H5C4.44772 51 4 50.5523 4 50V42.5C4 41.9477 4.44772 41.5 5 41.5C6.66193 41.5 8.29117 40.9449 9.49189 39.8776C10.6742 38.8267 11.5 37.2287 11.5 35C11.5 32.7714 10.6742 31.1734 9.49189 30.1224C8.29117 29.0551 6.66193 28.5 5 28.5C4.44772 28.5 4 28.0523 4 27.5V20ZM21.25 30.7313C20.6977 30.7313 20.25 31.179 20.25 31.7313C20.25 32.2835 20.6977 32.7313 21.25 32.7313H28.75C29.3023 32.7313 29.75 32.2835 29.75 31.7313C29.75 31.179 29.3023 30.7313 28.75 30.7313H21.25ZM21.25 38.2313C20.6977 38.2313 20.25 38.679 20.25 39.2313C20.25 39.7835 20.6977 40.2313 21.25 40.2313H38.75C39.3023 40.2313 39.75 39.7835 39.75 39.2313C39.75 38.679 39.3023 38.2313 38.75 38.2313H21.25Z"
    />
  </svg>
);

export default SvgLogo;

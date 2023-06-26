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
      d="M18.8895 6.71223C21.6193 5.58147 24.5452 4.99948 27.5 4.99948C30.4548 4.99948 33.3807 5.58147 36.1106 6.71223C38.8405 7.84299 41.3209 9.50036 43.4103 11.5897C45.4997 13.6791 47.157 16.1595 48.2878 18.8894C49.4186 21.6193 50.0005 24.5452 50.0005 27.5C50.0005 30.4548 49.4185 33.3807 48.2878 36.1106C47.4773 38.0672 46.3963 39.8958 45.0795 41.544L54.2678 50.7322C55.2441 51.7085 55.2441 53.2915 54.2678 54.2678C53.2915 55.2441 51.7086 55.2441 50.7323 54.2678L41.5441 45.0796C37.5759 48.2499 32.6282 50.0005 27.5 50.0005C21.5325 50.0005 15.8094 47.6299 11.5898 43.4103C7.3701 39.1906 4.99951 33.4675 4.99951 27.5C4.99951 21.5325 7.37009 15.8094 11.5898 11.5897C13.6791 9.50036 16.1596 7.84299 18.8895 6.71223ZM27.5 9.99948C25.2018 9.99948 22.9261 10.4521 20.8029 11.3316C18.6796 12.2111 16.7504 13.5002 15.1253 15.1253C11.8433 18.4072 9.99951 22.8586 9.99951 27.5C9.99951 32.1414 11.8433 36.5927 15.1253 39.8747C18.4073 43.1567 22.8586 45.0005 27.5 45.0005C32.1415 45.0005 36.5928 43.1567 39.8748 39.8747C41.4998 38.2497 42.7889 36.3204 43.6684 34.1972C44.5479 32.0739 45.0005 29.7982 45.0005 27.5C45.0005 25.2018 44.5479 22.9261 43.6684 20.8028C42.7889 18.6796 41.4998 16.7503 39.8748 15.1253C38.2497 13.5002 36.3204 12.2111 34.1972 11.3316C32.0739 10.4521 29.7982 9.99948 27.5 9.99948Z"
    />
  </svg>
);

export default SvgLogo;

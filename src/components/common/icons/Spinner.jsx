import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = ({ titleTag = 'Loading', width = 96, animated = true }) => {
  const spin = keyframes`
    from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
  `;

  const Group = styled.g`
    transform-origin: center;
    animation-name: ${props => (props.isAnimated ? spin : 'none')};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      style={{
        width,
      }}
    >
      {titleTag && <title>{titleTag}</title>}
      <Group isAnimated={animated}>
        <path
          d="M48.0509 18.5909C45.446 18.5909 43.4541 16.5989 43.4541 13.9941V5.56668C43.4541 2.96185 45.446 0.96991 48.0509 0.96991C50.6557 0.96991 52.6476 2.96185 52.6476 5.56668V13.9941C52.6476 16.4457 50.6557 18.5909 48.0509 18.5909Z"
          fill="#ACACEB"
        />
        <path
          d="M48.0509 95.9699C45.446 95.9699 43.4541 93.978 43.4541 91.3731V82.9457C43.4541 80.3409 45.446 78.3489 48.0509 78.3489C50.6557 78.3489 52.6476 80.3409 52.6476 82.9457V91.3731C52.6476 93.978 50.6557 95.9699 48.0509 95.9699Z"
          fill="#6867BB"
        />
        <path
          d="M30.7363 23.1876C29.204 23.1876 27.6717 22.4215 26.7524 20.8893L22.6153 13.6876C21.3895 11.5425 22.1556 8.63119 24.3008 7.40539C26.4459 6.17958 29.3572 6.94571 30.583 9.09087L34.7201 16.2925C35.9459 18.4376 35.1798 21.3489 33.0346 22.5747C32.4217 22.8812 31.5024 23.1876 30.7363 23.1876Z"
          fill="#DADAF1"
        />
        <path
          d="M69.5024 90.1473C67.9701 90.1473 66.4379 89.3812 65.5185 87.849L61.3814 80.6473C60.1556 78.5022 60.9217 75.5909 63.0669 74.3651C65.212 73.1393 68.1233 73.9054 69.3491 76.0506L73.4862 83.2522C74.712 85.3973 73.9459 88.3086 71.8008 89.5344C71.0346 89.9941 70.2685 90.1473 69.5024 90.1473Z"
          fill="#8585CB"
        />
        <path
          d="M18.1719 35.7522C17.4057 35.7522 16.6396 35.5989 15.8735 35.1393L8.67187 31.0022C6.5267 29.7764 5.76057 26.8651 6.98638 24.7199C8.21219 22.5747 11.1235 21.8086 13.2686 23.0344L20.4703 27.1715C22.6154 28.3973 23.3815 31.3086 22.1557 33.4538C21.2364 34.986 19.7041 35.7522 18.1719 35.7522Z"
          fill="#E5E5F1"
        />
        <path
          d="M85.285 74.5183C84.5189 74.5183 83.7528 74.3651 82.9867 73.9054L75.6318 69.7683C73.4867 68.5425 72.7205 65.6312 73.9463 63.486C75.1721 61.3409 78.0834 60.5748 80.2286 61.8006L87.4302 65.9377C89.5754 67.1635 90.3415 70.0747 89.1157 72.2199C88.3495 73.7522 86.8173 74.5183 85.285 74.5183Z"
          fill="#AFAFD7"
        />
        <path
          d="M13.575 53.0667H5.14756C2.54272 53.0667 0.550781 51.0748 0.550781 48.4699C0.550781 45.8651 2.54272 43.8731 5.14756 43.8731H13.575C16.1798 43.8731 18.1717 45.8651 18.1717 48.4699C18.1717 51.0748 16.0266 53.0667 13.575 53.0667Z"
          fill="#F5F5F5"
        />
        <path
          d="M90.9539 53.0667H82.5265C79.9216 53.0667 77.9297 51.0748 77.9297 48.4699C77.9297 45.8651 79.9216 43.8731 82.5265 43.8731H90.9539C93.5587 43.8731 95.5507 45.8651 95.5507 48.4699C95.5507 51.0748 93.5587 53.0667 90.9539 53.0667Z"
          fill="#8B8BB1"
        />
        <path
          d="M10.8169 74.5183C9.28467 74.5183 7.75242 73.7522 6.83306 72.2199C5.60725 70.0747 6.37338 67.1635 8.51854 65.9377L15.7202 61.8006C17.8653 60.5748 20.7766 61.3409 22.0024 63.486C23.2282 65.6312 22.4621 68.5425 20.3169 69.7683L13.1153 73.9054C12.5024 74.3651 11.7363 74.5183 10.8169 74.5183Z"
          fill="#35348F"
        />
        <path
          d="M77.9302 35.7522C76.398 35.7522 74.8657 34.986 73.9463 33.4538C72.7205 31.3086 73.4867 28.3973 75.6318 27.1715L82.8334 23.0344C84.9786 21.8086 87.8899 22.5747 89.1157 24.7199C90.3415 26.8651 89.5754 29.7764 87.4302 31.0022L80.2286 35.1393C79.4625 35.5989 78.6963 35.7522 77.9302 35.7522Z"
          fill="#8181B5"
        />
        <path
          d="M26.5992 90.1473C25.833 90.1473 25.0669 89.9941 24.3008 89.5344C22.1556 88.3086 21.3895 85.3973 22.6153 83.2522L26.7524 76.0506C27.9782 73.9054 30.8895 73.1393 33.0346 74.3651C35.1798 75.5909 35.9459 78.5022 34.7201 80.6473L30.583 87.849C29.6637 89.3812 28.1314 90.1473 26.5992 90.1473Z"
          fill="#5857A7"
        />
        <path
          d="M65.3653 23.1876C64.5991 23.1876 63.833 23.0344 63.0669 22.5747C60.9217 21.3489 60.1556 18.4376 61.3814 16.2925L65.5185 9.09087C66.7443 6.94571 69.6556 6.17958 71.8008 7.40539C73.9459 8.63119 74.712 11.5425 73.4862 13.6876L69.3491 20.8893C68.4298 22.2683 66.8975 23.1876 65.3653 23.1876Z"
          fill="#9393F1"
        />
      </Group>
    </svg>
  );
};

export default Spinner;

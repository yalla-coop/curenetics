import React from 'react';

const ExternalLink = ({ titleTag = 'External Link', width = 28, fill = '#35348f' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 24"
    style={{
      width
    }}>
    {titleTag && <title>{titleTag}</title>}
    <path
      fill={fill}
      d="M20.8062 13.8933H19.8432C19.7026 13.8933 19.5872 13.9367 19.4974 14.0239C19.4069 14.1106 19.3618 14.2217 19.3618 14.357V18.9935C19.3618 19.6311 19.1263 20.1768 18.6549 20.6309C18.1835 21.0848 17.6168 21.3116 16.9547 21.3116H4.4373C3.77535 21.3116 3.20861 21.0848 2.73715 20.6309C2.26579 20.1768 2.03013 19.6312 2.03013 18.9935V6.9383C2.03013 6.30078 2.26573 5.75517 2.73715 5.30115C3.20861 4.84709 3.77535 4.62019 4.4373 4.62019H15.0287C15.1694 4.62019 15.2848 4.57659 15.3749 4.48976C15.4651 4.40283 15.5102 4.29184 15.5102 4.15648V3.22902C15.5102 3.09393 15.4651 2.98273 15.3749 2.89595C15.2848 2.80902 15.1694 2.76562 15.0287 2.76562H4.4373C3.24386 2.76562 2.22326 3.17376 1.37561 3.98997C0.528267 4.80614 0.104492 5.78907 0.104492 6.93846V18.9938C0.104492 20.1431 0.528267 21.1262 1.37566 21.9421C2.22331 22.7583 3.24392 23.1667 4.43736 23.1667H16.9547C18.1481 23.1667 19.1688 22.7583 20.0164 21.9421C20.864 21.1262 21.2878 20.1431 21.2878 18.9938V14.3573C21.2878 14.2219 21.2427 14.1107 21.1521 14.0239C21.0619 13.9367 20.9465 13.8933 20.8062 13.8933Z" />
    <path
      fill={fill}
      d="M26.779 1.18628C26.5884 1.00272 26.3624 0.911011 26.1018 0.911011H18.3989C18.1382 0.911011 17.9124 1.00272 17.722 1.18628C17.5314 1.36974 17.4359 1.5871 17.4359 1.83827C17.4359 2.08943 17.5314 2.30684 17.722 2.49041L20.3697 5.0405L10.5607 14.4877C10.4602 14.5843 10.4102 14.6954 10.4102 14.8208C10.4102 14.9466 10.4604 15.0577 10.5607 15.1543L12.2758 16.8059C12.3761 16.9024 12.4915 16.9506 12.6218 16.9506C12.7522 16.9506 12.8677 16.9025 12.9679 16.8059L22.777 7.35882L25.425 9.90892C25.6154 10.0925 25.8412 10.1843 26.102 10.1843C26.3628 10.1843 26.5885 10.0925 26.7792 9.90892C26.9698 9.7254 27.065 9.50809 27.065 9.25693V1.83827C27.0649 1.58695 26.9694 1.36974 26.779 1.18628Z" />
  </svg>
);

export default ExternalLink;
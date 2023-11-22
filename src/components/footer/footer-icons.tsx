import React from 'react';

const FooterIcons = () => {
  return (
    <div className='footer-icons'>
      <a
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target='_blank'
        rel='noreferrer'
      >
        <svg
          width='22'
          height='23'
          viewBox='0 0 22 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20.3732 0.403474H1.62676C1.41603 0.400565 1.20679 0.438946 1.01099 0.516425C0.815184 0.593904 0.636653 0.708963 0.485591 0.855031C0.334528 1.0011 0.213893 1.17532 0.130575 1.36773C0.0472562 1.56015 0.00288655 1.76699 0 1.97645V20.8302C0.00288655 21.0396 0.0472562 21.2465 0.130575 21.4389C0.213893 21.6313 0.334528 21.8055 0.485591 21.9516C0.636653 22.0977 0.815184 22.2127 1.01099 22.2902C1.20679 22.3677 1.41603 22.4061 1.62676 22.4032H20.3732C20.584 22.4061 20.7932 22.3677 20.989 22.2902C21.1848 22.2127 21.3633 22.0977 21.5144 21.9516C21.6655 21.8055 21.7861 21.6313 21.8694 21.4389C21.9527 21.2465 21.9971 21.0396 22 20.8302V1.97645C21.9971 1.76699 21.9527 1.56015 21.8694 1.36773C21.7861 1.17532 21.6655 1.0011 21.5144 0.855031C21.3633 0.708963 21.1848 0.593904 20.989 0.516425C20.7932 0.438946 20.584 0.400565 20.3732 0.403474ZM6.67304 18.8172H3.35312V8.91736H6.67304V18.8172ZM5.01308 7.53137C4.55522 7.53137 4.11611 7.35058 3.79236 7.02878C3.4686 6.70697 3.28672 6.2705 3.28672 5.8154C3.28672 5.36029 3.4686 4.92383 3.79236 4.60202C4.11611 4.28021 4.55522 4.09942 5.01308 4.09942C5.2562 4.07202 5.50241 4.09596 5.73558 4.16969C5.96874 4.24342 6.18361 4.36528 6.36612 4.52727C6.54862 4.68927 6.69465 4.88776 6.79463 5.10974C6.89461 5.33172 6.94629 5.57219 6.94629 5.8154C6.94629 6.05861 6.89461 6.29908 6.79463 6.52106C6.69465 6.74304 6.54862 6.94153 6.36612 7.10352C6.18361 7.26552 5.96874 7.38737 5.73558 7.4611C5.50241 7.53483 5.2562 7.55878 5.01308 7.53137ZM18.6469 18.8172H15.327V13.5043C15.327 12.1733 14.8511 11.3043 13.6449 11.3043C13.2716 11.307 12.9081 11.4234 12.6033 11.6378C12.2986 11.8522 12.0673 12.1543 11.9406 12.5033C11.854 12.7618 11.8165 13.0341 11.83 13.3063V18.8062H8.51006V8.90635H11.83V10.3033C12.1316 9.78316 12.5702 9.35462 13.0987 9.06388C13.6271 8.77313 14.2254 8.6312 14.829 8.65336C17.0423 8.65336 18.6469 10.0723 18.6469 13.1193V18.8172Z'
            fill='white'
          />
        </svg>
      </a>

      <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
        <svg
          width='22'
          height='23'
          viewBox='0 0 22 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='0.40332' width='22' height='22' rx='3' fill='white' />
          <circle
            cx='11'
            cy='11.4035'
            r='4.07647'
            fill='white'
            stroke='black'
            stroke-width='2.2'
          />
          <circle cx='14.5208' cy='5.33275' r='1.19896' fill='black' />
        </svg>
      </a>

      <a
        href={process.env.NEXT_PUBLIC_TWITTER_URL}
        target='_blank'
        rel='noreferrer'
      >
        <svg
          width='22'
          height='23'
          viewBox='0 0 22 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.33335 2.23682H0.916687L8.48835 12.333L1.32919 20.5702H3.75835L9.61402 13.8336L14.6667 20.5702H21.0834L13.1927 10.0487L19.9834 2.23682H17.5542L12.067 8.54898L7.33335 2.23682ZM15.5834 18.7368L4.58335 4.07015H6.41669L17.4167 18.7368H15.5834Z'
            fill='white'
          />
        </svg>
      </a>

      <a
        href={process.env.NEXT_PUBLIC_SOCIAL_URL}
        target='_blank'
        rel='noreferrer'
      >
        <svg
          width='22'
          height='23'
          viewBox='0 0 22 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_13_1209)'>
            <path
              d='M20.6607 7.95849H1.33832V5.35882H20.6617V7.95849H20.6607ZM1.33832 10.3143V22.4033L11 17.0042L20.6617 22.4033V10.3143H1.33832ZM20.6617 0.40332H1.33832V3.00299H20.6617V0.40332Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_13_1209'>
              <rect
                width='22'
                height='22'
                fill='white'
                transform='translate(0 0.40332)'
              />
            </clipPath>
          </defs>
        </svg>
      </a>

      <a
        href={process.env.NEXT_PUBLIC_MEDIUM_URL}
        target='_blank'
        rel='noreferrer'
      >
        <svg
          width='22'
          height='23'
          viewBox='0 0 22 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_13_1211)'>
            <path
              d='M12.4094 12.0099C12.4094 15.7618 9.63188 18.804 6.204 18.804C5.39036 18.8052 4.58448 18.6304 3.83236 18.2897C3.08024 17.9489 2.39662 17.4487 1.82053 16.8179C1.24443 16.187 0.787145 15.4377 0.474779 14.6127C0.162413 13.7878 0.00108268 12.9033 0 12.0099C0 8.25657 2.7775 5.21583 6.204 5.21583C7.01775 5.21444 7.82379 5.38908 8.57606 5.72979C9.32834 6.07049 10.0121 6.57058 10.5884 7.20149C11.1646 7.8324 11.622 8.58178 11.9345 9.40682C12.2469 10.2319 12.4083 11.1164 12.4094 12.0099ZM19.2156 12.0099C19.2156 15.5429 17.8269 18.4055 16.1136 18.4055C14.4004 18.4055 13.0116 15.5414 13.0116 12.0099C13.0116 8.477 14.4004 5.61442 16.1136 5.61442C17.8269 5.61442 19.2156 8.47851 19.2156 12.0099ZM22 12.0099C22 15.1745 21.5119 17.7396 20.9083 17.7396C20.306 17.7396 19.8179 15.173 19.8179 12.0099C19.8179 8.84539 20.306 6.28024 20.9096 6.28024C21.5119 6.28024 22 8.84539 22 12.0099Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_13_1211'>
              <rect
                width='22'
                height='22'
                fill='white'
                transform='translate(0 0.40332)'
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default FooterIcons;

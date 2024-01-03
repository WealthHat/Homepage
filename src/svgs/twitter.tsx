import React from "react";
import { TwitterShareButton } from "react-share";

const Twitter = ({ url }) => {
  return (
    <TwitterShareButton url={url}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="22" height="22" fill="#1E1E1E" />
        <g id="ARTICLE" clipPath="url(#clip0_0_1)">
          <rect
            width="1440"
            height="3344"
            transform="translate(-742 -1826)"
            fill="white"
          />
          <g id="Frame 34929" clipPath="url(#clip1_0_1)">
            <rect
              width="1440"
              height="1792"
              transform="translate(-742 -1714)"
              fill="#F6F6F6"
            />
            <g id="Frame 34932">
              <rect
                width="1274"
                height="1277"
                transform="matrix(1 0 0 -1 -659 107)"
                fill="white"
              />
              <g id="Frame 34935">
                <g id="Frame 34926">
                  <g id="ri:twitter-x-line">
                    <path
                      id="Vector"
                      d="M7.33335 1.83325H0.916687L8.48835 11.9294L1.32919 20.1666H3.75835L9.61402 13.43L14.6667 20.1666H21.0834L13.1927 9.64509L19.9834 1.83325H17.5542L12.067 8.14542L7.33335 1.83325ZM15.5834 18.3333L4.58335 3.66659H6.41669L17.4167 18.3333H15.5834Z"
                      fill="#13151B"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width="1440"
              height="3344"
              fill="white"
              transform="translate(-742 -1826)"
            />
          </clipPath>
          <clipPath id="clip1_0_1">
            <rect
              width="1440"
              height="1792"
              fill="white"
              transform="translate(-742 -1714)"
            />
          </clipPath>
        </defs>
      </svg>
    </TwitterShareButton>
  );
};

export default Twitter;

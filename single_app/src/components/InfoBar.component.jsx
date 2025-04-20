import { useState } from 'react';

/**
 * Buttons
 * @typedef {object} props InfoBarControlButton
 * @property {string} path - SVG path data
 * @property {SVGPathElement} alternative path - SVG path data in case the button icon has to change
 * @property {string} [w]  button -  width
 * @property {string} [h] button - height
 * @property {string} [viewBox] - format 0 0 0 0
 * @property {boolean} [false] css class big
 */
export function InfoBarControlButton({
  path,
  pathAlt,
  w = '5',
  h = '5',
  viewBox = '0 0 24 24',
  big = false,
}) {
  // Material Symbols Lightby Google
  const [alt, setAlt] = useState(false);
  return (
    <button
      className={`infobar__control-button ${big ? 'infobar__control-button--big' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${w}rem`}
        height={`${h}rem`}
        viewBox={viewBox}
      >
        {alt ? pathAlt : path}
      </svg>
    </button>
  );
}

export default function InfoBar() {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex h-full w-24 flex-col content-center items-center justify-start gap-2 pt-6">
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="m6.921 12.5l5.793 5.792L12 19l-7-7l7-7l.714.708L6.92 11.5H19v1z"
            />
          }
          w="12"
          h="12"
          big={true}
        />
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="M12 13.327q-.547 0-.937-.39t-.39-.937t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39M5.708 19H8.5q.213 0 .356.144t.144.357t-.144.356T8.5 20H4.808q-.343 0-.576-.232T4 19.192V15.5q0-.213.144-.356T4.501 15t.356.144T5 15.5v2.792l3.246-3.246q.14-.14.344-.15t.364.15t.16.354t-.16.354zm12.584 0l-3.246-3.246q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L19 18.292V15.5q0-.213.144-.356t.357-.144t.356.144t.143.356v3.692q0 .344-.232.576t-.576.232H15.5q-.213 0-.356-.144T15 19.499t.144-.356T15.5 19zM5 5.708V8.5q0 .213-.144.356T4.499 9t-.356-.144T4 8.5V4.808q0-.343.232-.576T4.808 4H8.5q.213 0 .356.144T9 4.501t-.144.356T8.5 5H5.708l3.246 3.246q.14.14.15.344t-.15.364t-.354.16t-.354-.16zm14 0l-3.246 3.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L18.292 5H15.5q-.213 0-.356-.144T15 4.499t.144-.356T15.5 4h3.692q.344 0 .576.232t.232.576V8.5q0 .213-.144.356T19.499 9t-.356-.144T19 8.5z"
            />
          }
        />
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="M12 6.616q.262 0 .439-.177T12.615 6t-.177-.438T12 5.385t-.438.177t-.177.438t.177.439t.438.177m-.5 7.807h1V8.346h-1zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z"
            />
          }
        />
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="M8.616 16q-.672 0-1.144-.472T7 14.385v-4.77q0-.67.472-1.143Q7.944 8 8.616 8h.769l1-1h3.23l1 1h.77q.67 0 1.143.472q.472.472.472 1.144v4.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h6.769q.269 0 .442-.173t.173-.442v-4.77q0-.269-.173-.442T15.385 9h-6.77q-.269 0-.442.173T8 9.616v4.769q0 .269.173.442t.443.173M12 13.423q.594 0 1.009-.414q.414-.415.414-1.009t-.414-1.009T12 10.577t-1.009.414q-.414.415-.414 1.009t.414 1.009t1.009.414M9.935 1.193q.503-.122 1.01-.158Q11.452 1 11.962 1q2.138 0 4.053.76q1.914.761 3.401 2.105t2.436 3.173T23 11h-1q-.194-1.896-1.036-3.526t-2.161-2.827t-3.018-1.899t-3.616-.736l1.935 1.934l-.708.708zm4.13 21.615q-.503.12-1.01.156T12.039 23q-2.139 0-4.053-.76q-1.915-.761-3.402-2.105t-2.436-3.172Q1.2 15.133 1 13h1q.2 1.896 1.04 3.526q.839 1.63 2.157 2.827t3.019 1.899t3.615.737l-1.935-1.935l.708-.708zM12 12"
            />
          }
        />
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="M11.962 13q-.402 0-.701-.299t-.3-.701t.3-.701t.7-.299t.702.299t.299.701t-.3.701t-.7.299m0 7q-3.052 0-5.314-1.999T4.031 13h1.011q.408 2.58 2.359 4.29t4.56 1.71q2.926 0 4.963-2.037T18.962 12t-2.038-4.963T11.962 5q-1.553 0-2.918.656q-1.365.655-2.41 1.805h2.481v1H4.962V4.309h1v2.388q1.16-1.273 2.718-1.984T11.962 4q1.665 0 3.119.626t2.541 1.714t1.714 2.54t.626 3.119t-.626 3.12t-1.714 2.542t-2.541 1.713t-3.12.626"
            />
          }
        />
      </div>
    </>
  );
}

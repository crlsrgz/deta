import { useState } from 'react';

export default function InfoBar() {
  function InfoBarControlButton({
    path,
    pathAlt,
    width = '5',
    height = '5',
    viewBox = '0 0 24 24',
  }) {
    // Material Symbols Lightby Google
    const [alt, setAlt] = useState(false);
    return (
      <button className="infobar__control-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}rem`}
          height={`${height}rem`}
          viewBox={viewBox}
        >
          {alt ? pathAlt : path}
        </svg>
      </button>
    );
  }
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
        />
        <InfoBarControlButton
          path={
            <path
              fill="currentColor"
              d="M12 13.327q-.547 0-.937-.39t-.39-.937t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39M5.708 19H8.5q.213 0 .356.144t.144.357t-.144.356T8.5 20H4.808q-.343 0-.576-.232T4 19.192V15.5q0-.213.144-.356T4.501 15t.356.144T5 15.5v2.792l3.246-3.246q.14-.14.344-.15t.364.15t.16.354t-.16.354zm12.584 0l-3.246-3.246q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L19 18.292V15.5q0-.213.144-.356t.357-.144t.356.144t.143.356v3.692q0 .344-.232.576t-.576.232H15.5q-.213 0-.356-.144T15 19.499t.144-.356T15.5 19zM5 5.708V8.5q0 .213-.144.356T4.499 9t-.356-.144T4 8.5V4.808q0-.343.232-.576T4.808 4H8.5q.213 0 .356.144T9 4.501t-.144.356T8.5 5H5.708l3.246 3.246q.14.14.15.344t-.15.364t-.354.16t-.354-.16zm14 0l-3.246 3.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L18.292 5H15.5q-.213 0-.356-.144T15 4.499t.144-.356T15.5 4h3.692q.344 0 .576.232t.232.576V8.5q0 .213-.144.356T19.499 9t-.356-.144T19 8.5z"
            />
          }
        />
        <div className="block h-16 w-16 border-2 border-solid border-limon-400"></div>
        <div className="block h-16 w-16 border-2 border-solid border-limon-400"></div>
        <div className="block h-16 w-16 border-2 border-solid border-limon-400"></div>
      </div>
    </>
  );
}

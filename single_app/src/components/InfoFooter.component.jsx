import { useState } from 'react';
export default function InfoFooter({openState, switchOpenState, title}) {
  return (
    <>
      <div
        className={`fixed inset-x-0 h-36 -bottom-0 bg-limon-500 z-20 transition-all duration-700 ease-out ${openState ? 'translate-y-0' : 'translate-y-24'}`}
      >
        <button
          onClick={switchOpenState}
          className="text-2xl w-full  text-center top-4 fixed"
        >
          {title??"Missing title"}
        </button>
      </div>
    </>
  );
}

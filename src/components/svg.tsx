import React from "react";

export default function Svg({ path }: { path: string }) {
  return (
    <>
      <svg
        className="mr-0 h-7 w-7 rounded-lg bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 p-[2px] shadow-lg transition delay-100 duration-500 ease-in-out hover:scale-125 hover:from-fuchsia-500 hover:to-cyan-500 sm:mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d={path} />
      </svg>
    </>
  );
}

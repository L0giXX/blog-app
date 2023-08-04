import React from "react";
import Link from "next/link";
import ProfileImage from "./profileImage";

export default function Header() {
  return (
    <header className="mx-auto h-screen max-w-[640px] p-4 sm:mt-8 lg:mt-32">
      <div className="flex flex-col">
        <div className="flex justify-start">
          <ProfileImage />
          <div className="ml-6 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Marc Müller</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>
        </div>
        <div className="mt-7">
          <p className="text-xl">
            Welcome to my personal blog where I write about my experiences with
            software development, in particular with web development. I am 19
            years old and currently studying informatics at the University of
            Applied Sciences in Wr Neustadt, Austria.
          </p>
        </div>
        <div className="mt-7 flex flex-row">
          <div className="flex items-center">
            <a
              className="text-xl font-semibold"
              href="https://twitter.com/L0giX_ATv"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 p-[2px] shadow-lg transition delay-100 duration-500 ease-in-out hover:scale-125 hover:from-fuchsia-500 hover:to-cyan-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a
              className="text-xl font-semibold"
              href="https://github.com/L0giXX"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 p-[2px] shadow-lg transition delay-100 duration-500 ease-in-out hover:scale-125 hover:from-fuchsia-500 hover:to-cyan-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <Link className="text-xl font-semibold" href="/blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 p-[2px] shadow-lg transition delay-100 duration-500 ease-in-out hover:scale-125 hover:from-fuchsia-500 hover:to-cyan-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm0 14h-5v-1h5v1zm5-3h-10v-1h10v1zm0-3h-10v-1h10v1z" />
              </svg>
              Posts
            </Link>
          </div>
          <div className="ml-6 flex items-center">
            <Link
              className="text-xl font-semibold"
              href="/Lebenslauf.pdf"
              target="_blank"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 p-[2px] shadow-lg transition delay-100 duration-500 ease-in-out hover:scale-125 hover:from-fuchsia-500 hover:to-cyan-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
              </svg>
              Résumé
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

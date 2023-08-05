import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile_Image.png";
import Link from "next/link";

export default function ProfileImage() {
  return (
    <Link
      className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 shadow-lg transition duration-500 ease-out hover:scale-110 hover:from-fuchsia-500 hover:to-cyan-500"
      href="/"
    >
      <div className="rounded-full p-1">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="rounded-full"
        />
      </div>
    </Link>
  );
}

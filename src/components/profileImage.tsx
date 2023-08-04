import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile_Image.png";

export default function ProfileImage() {
  return (
    <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 shadow-lg transition ease-out hover:scale-105 hover:from-fuchsia-500 hover:to-cyan-500">
      <div className="rounded-full p-1">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

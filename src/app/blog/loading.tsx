"use client";
import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="mx-auto max-w-[640px] px-4">
      <TailSpin
        height="40"
        width="40"
        color="#FFFFFF"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

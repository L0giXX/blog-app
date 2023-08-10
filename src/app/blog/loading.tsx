"use client";
import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="mx-auto max-w-[640px]">
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

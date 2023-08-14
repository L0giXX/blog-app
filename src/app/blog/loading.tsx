"use client";
import { TailSpin } from "react-loader-spinner";

interface LoadingProps {
  height?: string;
  width?: string;
}

export default function Loading({ height = "50", width = "50" }: LoadingProps) {
  return (
    <div className="mx-auto max-w-[640px]">
      <TailSpin
        height={height}
        width={width}
        color="#FFFFFF"
        ariaLabel="tail-spin-loading"
        radius={1}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

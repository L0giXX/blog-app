import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 h-screen">
      {children}
    </div>
  );
}

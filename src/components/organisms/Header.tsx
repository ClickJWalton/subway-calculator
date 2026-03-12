import React from "react";

const Header: React.FC = () => (
  <div className="text-center mb-10">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-12 bg-[#FFC72C]/40" />
      <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-[0.2em]">
        Unofficial Fan Tool
      </span>
      <div className="h-px w-12 bg-[#FFC72C]/40" />
    </div>
    <h1 className="text-5xl font-black tracking-tight mb-3">
      <span className="text-[#008C15]">SUBWAY</span>
      <span className="text-white"> CALC</span>
    </h1>
    <p className="text-gray-500 text-sm">
      Build your sub · track the nutrition
    </p>
  </div>
);

export default Header;

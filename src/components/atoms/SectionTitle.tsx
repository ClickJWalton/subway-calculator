import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2
    className={`text-xs font-bold text-[#FFC72C] uppercase tracking-widest mb-4 flex items-center gap-2 ${className}`}
  >
    <span className="w-1 h-3.5 bg-[#008C15] rounded-full inline-block flex-shrink-0" />
    {children}
  </h2>
);

export default SectionTitle;

// src/components/organisms/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#111111] border-t border-[#2a2a2a] mt-12 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center space-y-4">
        <div className="text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto">
          <p className="font-semibold text-gray-400 mb-2 uppercase tracking-widest text-[10px]">
            Legal Disclaimer
          </p>
          <p className="mb-2">
            This is an independent, unofficial calculator created for
            educational and personal use only. This project is{" "}
            <strong className="text-gray-400">
              not affiliated with, endorsed by, or sponsored by Subway
            </strong>{" "}
            or any of its subsidiaries.
          </p>
          <p className="mb-2">
            Subway® is a registered trademark of Subway IP LLC. All trademarks,
            logos, and brand names are the property of their respective owners.
          </p>
          <p className="mb-2">
            Nutritional information is based on publicly available Subway UK
            nutrition data (June 2025). Actual values may vary.{" "}
            <strong className="text-gray-400">
              Always consult official Subway nutrition information for the most
              accurate data.
            </strong>
          </p>
          <p className="mt-3">
            For official information visit:{" "}
            <a
              href="https://www.subway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008C15] hover:text-[#4ade80] underline transition-colors"
            >
              www.subway.com
            </a>
          </p>
        </div>

        <div className="border-t border-[#2a2a2a] pt-4">
          <p className="text-[10px] text-gray-600">
            © {new Date().getFullYear()} Independent Calculator Project · Educational use only · MIT License
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

// src/components/organisms/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center space-y-4">
        <div className="text-sm text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-800 mb-2">Legal Disclaimer</p>
          <p className="mb-2">
            This is an independent, unofficial calculator created for
            educational and personal use only. This project is{" "}
            <strong>
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
            nutrition data (June 2025) and is provided for informational
            purposes only. Actual nutritional content may vary based on
            preparation methods, ingredient suppliers, portion sizes, and
            regional differences.
          </p>
          <p className="mb-2">
            <strong>
              Always consult official Subway nutrition information for the most
              accurate and up-to-date data.
            </strong>
            This calculator should not be used as the sole source for dietary
            decisions, especially for individuals with food allergies or
            specific dietary requirements.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            For official Subway nutrition information, please visit:
            <a
              href="https://www.subway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              www.subway.com
            </a>
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Independent Calculator Project. Created
            for educational purposes. Not for commercial use.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            This project is open source and available under the MIT License.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

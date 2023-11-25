import React, { ReactNode } from "react";

interface QuickBuySectionProps {
  title: string;
  tabs: string[];
  activeTab: number;
  onTabClick: (index: number) => void;
  children?: ReactNode;
}

const QuickBuySection: React.FC<QuickBuySectionProps> = ({
  title,
  tabs,
  activeTab,
  onTabClick,
  children,
}) => {
  return (
    <div className="mb-4 mx-4 mt-4">
      <div className="text-base font-bold font-[#404751]">{title}</div>
      <div className="my-2">
        <div className="container">
          <ul className="flex gap-3 border-b border-[#D5D6D8] -px-2">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`pb-1 flex justify-center items-center relative cursor-pointer font-medium text-sm ${
                  activeTab === index + 1
                    ? "text-[#cb1f59] border-b-2 border-[#cb1f59]"
                    : ""
                }`}
                onClick={() => onTabClick(index + 1)}
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className="content-container">
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className={`hidden ${
                  activeTab === index + 1 ? "!flex flex-col" : ""
                }`}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickBuySection;

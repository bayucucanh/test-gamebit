import React from "react";

interface TabContentProps {
  tabs: string[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const TabContent: React.FC<TabContentProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  return (
    <div>
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
        {tabs.map((tabContent, index) => (
          <div
            key={index}
            className={`hidden ${
              activeTab === index + 1 ? "!flex flex-col" : ""
            }`}
          >
            {tabContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;

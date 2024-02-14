import React from "react";

interface props {
  title: string;
  parent?: string;
  parent_url?: string;
  child?: string;
}

const Header = ({ title, parent, child, parent_url }: props) => {
  return (
    <div className="flex justify-between items-center h-16l border-b p-4">
      <h1 className="text-xl font-bold text-gray-700">{title}</h1>
      <div className="flex gap-2">
        {parent && <a href={parent_url}>{parent}</a>} /{child}
      </div>
    </div>
  );
};

export default Header;

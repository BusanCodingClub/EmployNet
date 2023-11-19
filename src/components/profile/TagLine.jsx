import React from "react";

function TagLine({ content }) {
  return (
    <li className="select-none py-1 px-3.5 mr-2.5 mb-2.5 text-xs text-white bg-gray-500 text-center rounded-full last:mr-0 lg:py-1.5 lg:px-4 lg:mr-2.5 lg:mb-0 lg:text-sm lg:leading-4">
      {content}
    </li>
  );
}

export default TagLine;

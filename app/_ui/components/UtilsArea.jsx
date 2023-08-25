import React from "react";

const UtilsArea = ({ time, questCount }) => {
  var x;
  if (window.innerWidth >= 1024) {
    x = (time * 908) / 30;
  } else {
    x = (time * 308) / 30;
  }
  return (
    <div
      style={{ width: `${x}px` }}
      className="flex items-center justify-center p-2 h-5 bg-white rounded-lg text-sm transition-all"
    >
      {time}
    </div>
  );
};

export default UtilsArea;

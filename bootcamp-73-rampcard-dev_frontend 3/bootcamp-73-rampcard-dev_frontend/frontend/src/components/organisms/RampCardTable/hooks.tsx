import { useState } from "react";

const UseRampCardTablehooks = () => {
  const [startIndex, setStartIndex] = useState(0);
  return {
    startIndex,
    setStartIndex,
  };
};

export default UseRampCardTablehooks;

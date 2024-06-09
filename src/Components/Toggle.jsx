import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (isToggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isToggle]);

  return (
    <div id="toggle">
      <label class="switch">
        <input
          type="checkbox"
          checked={isToggle}
          onChange={(e) => setIsToggle(e.target.checked)}
        />{" "}
        <div></div>
      </label>
    </div>
  );
};

export default Toggle;

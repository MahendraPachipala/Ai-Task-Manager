import { useState } from "react";

const ToggleSwitch = ({ isChecked, setIsChecked }) => {
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex">
    <label class="switch-button" for="switch">
      <div class="switch-outer ">
        <input id="switch" type="checkbox" onChange={handleToggle} />
        <div class="button">
          <span class="button-toggle"></span>
          <span class="button-indicator"></span>
        </div>
      </div>
    </label>
    </div>
  );
};

export default ToggleSwitch;

import { useState } from "react";

const ToggleSwitch = ({ isChecked, setIsChecked }) => {
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex">
    <label className="switch-button" htmlFor="switch">
      <div className="switch-outer ">
        <input id="switch" type="checkbox" onChange={handleToggle} />
        <div className="button">
          <span className="button-toggle"></span>
          <span className="button-indicator"></span>
        </div>
      </div>
    </label>
    </div>
  );
};

export default ToggleSwitch;

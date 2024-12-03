import React, { useState } from "react";

export default function ThemeSwitcher({
  color = "#A729F5",
  size = "24",
  onSetToggle,
}) {
  const [isNight, setIsNight] = useState(false);
  const sliderStyle = {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: color,
    borderRadius: "34px",
    transition: "0.4s",
  };
  const switchBoxStyle = {
    position: "relative",
    display: "inline-block",
    height: `${size}px`,
    width: `${Number(size) * 2}px`,
  };
  const inputStyle = {
    opacity: "0",
    width: "0",
    height: "0",
  };
  const toggleStyle = {
    position: "absolute",
    content: "",
    height: `${Number(size) - 8}px`,
    width: `${Number(size) - 8}px`,
    backgroundColor: "white",
    left: "5px",
    bottom: "4px",
    zIndex: "100",
    borderRadius: "50%",
    transition: "0.4s",
    transform: !isNight ? `translateX(${size}px)` : "translateX(-1px)",
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  function handleToggle(e) {
    setIsNight(e.target.checked);
    onSetToggle?.(isNight);
  }
  return (
    <div style={containerStyle}>
      <DayIcon size={size} />
      <label style={switchBoxStyle}>
        <span style={toggleStyle}></span>
        <input
          value={isNight}
          onChange={handleToggle}
          type="checkbox"
          style={inputStyle}
        />
        <span style={sliderStyle}></span>
      </label>
      <NightIcon size={size} />
    </div>
  );
}
function DayIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#626C7F"
        d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z"
      />
    </svg>
  );
}
function NightIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#626C7F"
        d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"
      />
    </svg>
  );
}

import "./MenuListItem.css";
import React from "react";

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.moodClick(props.mood);
  };
  const getBackgroudColor = () => {
    return props.isSelected ? "skyblue" : null;
  };

  return (
    <li>
      <button
        style={{ backgroundColor: getBackgroudColor() }}
        onClick={onItemClick}
      >
        기분이: {props.mood}
      </button>
    </li>
  );
}

import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";
import React from "react";

const menus = [
  "좋아요! 😃",
  "정말 좋아요! 🤭",
  "최고에요! 😄",
  "미쳤어요!! 🤪",
];
export default function MenuList(props) {
  return (
    <ul>
      {menus.map((moodEl, index) => {
        return (
          <MenuListItem
            key={index}
            mood={moodEl}
            moodClick={props.onItemClick}
            isSelected={props.mood === moodEl}
          />
        );
      })}
    </ul>
  );
}

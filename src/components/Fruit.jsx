import React from "react";

export default function Fruit({ name, emoji, price }) {
  return (
    <div>
      <li>
        {emoji} {name} ${price}
      </li>
    </div>
  );
}

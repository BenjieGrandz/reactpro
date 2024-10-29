import React from "react";

export default function Fruit({ name, emoji, price, soldout }) {
  return (
    <>
      {" "}
      {/* these are known as fragments */}
      {/* {emoji} {name} ${price} */}
      {price > 0 ? (
        <li>
          <h3>
            {emoji} {name} ${price} {soldout ? "" : "Available"}
          </h3>
        </li>
      ) : (
        <h3></h3>
      )}
    </>
  );
}

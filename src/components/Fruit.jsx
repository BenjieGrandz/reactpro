import React from "react";

export default function Fruit({ name, emoji, price }) {
  return (
    <>
      {" "}
      {/* these are known as fragments */}
      {/* {emoji} {name} ${price} */}
      {price > 5 ? (
        <li>
          <h3>
            {emoji} {name} ${price}
          </h3>
        </li>
      ) : (
        <h3></h3>
      )}
    </>
  );
}

import React from "react";

export default function Fruits() {
  const fruits = ["Bananas", "Mangoes", "Oranges", "Apples", "Thorn Melons"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

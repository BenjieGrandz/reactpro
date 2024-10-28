import React from "react";
import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Bananas", "Mangoes", "Oranges", "Apples", "Thorn Melons"];
  const fruits = [
    { name: "Bananas", price: "10", emoji: "🍌" },
    { name: "Mangoes", price: "2", emoji: "🥭" },
    { name: "Oranges", price: "13", emoji: "🍈" },
    { name: "Apples", price: "42", emoji: "🍎" },
    { name: "Melons", price: "250", emoji: "🍉" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

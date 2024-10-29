import React from "react";
import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Bananas", "Mangoes", "Oranges", "Apples", "Thorn Melons"];
  const fruits = [
    { name: "Bananas", price: "10", emoji: "🍌", soldout: true },
    { name: "Mangoes", price: "2", emoji: "🥭", soldout: false },
    { name: "Oranges", price: "13", emoji: "🍈", soldout: true },
    { name: "Apples", price: "42", emoji: "🍎", soldout: true },
    { name: "Melons", price: "250", emoji: "🍉", soldout: false },
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}

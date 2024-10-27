import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <Hello
        name="Benjie"
        message="Goodmorning"
        emoji="😍"
        seatNumbers={seatNumbers}
      />{" "}
      {/*emoji picker is windows + period  */}
    </div>
  );
}

export default App;

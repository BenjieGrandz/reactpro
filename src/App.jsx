import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Ben",
    emoji: "😍",
    message: "umepotea sana",
    seatNumbers: [1, 4, 7],
  };
  {
    /* This is the object that will be passed as a prop */
  }
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;

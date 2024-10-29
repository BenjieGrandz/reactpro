export default function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Show me the fruits</button>
    </div>
  );
}

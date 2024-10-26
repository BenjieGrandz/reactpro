const name = "Papi Chulo";

function displaymessage() {
  return "what a wow!";
}
function Hello() {
  return (
    <div>
      <h1>Hello from the other side!! {displaymessage()}</h1> <br />{" "}
      <h1>Mr {name}</h1>
    </div>
  );
}

export default Hello;

//export default function ConditionalComponent() {
//const messageOne = "We are the Chosen generation";
//const messageTwo = "We are a lost generation";
//const display = true;
//if (display) {
//  return <h1>{messageOne}</h1>;
//} else {
//return messageTwo;
//}
//}

export default function ConditionalComponent() {
  const display = false;
  let message = display ? "We are the Chosen generation" : "We are lost people";
  return message;
}

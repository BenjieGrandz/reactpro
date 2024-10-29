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
  const display = true;
  let message;
  if (display) {
    message = <h1>We are the Chosen generation</h1>;
  } else {
    message = <h2>We are the Chosen generation</h2>;
  }

  return message;
}

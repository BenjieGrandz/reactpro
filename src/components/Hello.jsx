function Hello({ name, message, emoji, seatNumbers }) {
  return (
    <div>
      <h1>
        {message} {emoji} {name} {seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;

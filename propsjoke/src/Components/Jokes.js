function Jokes(props) {
  return (
    <div className="jokes">
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
    </div>
  );
}

export default Jokes;

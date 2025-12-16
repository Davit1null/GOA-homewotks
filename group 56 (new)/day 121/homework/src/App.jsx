const bigFunc = () => {

function Hello({ name }) {
  return <h1>hello, {name}</h1>;
}

function HelloButton({ onClick }) {
  return <button onClick={onClick}>click me</button>;
}
  return (
    <div>
      <Hello name="someone" />
      <HelloButton onClick={someFunction} />
    </div>
  );
}

export default bigFunc
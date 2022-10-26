function Temperature(props) {
  return (
    <>
      <h1>Country: {props.country}</h1>
      <h1>City: {props.city}</h1>
      <h1>Temp: {props.temperature}</h1>
    </>
  );
}

export default Temperature;

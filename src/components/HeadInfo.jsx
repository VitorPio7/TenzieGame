export default function HeadInfo(props) {
  console.log(props.points);
  return (
    <div className="scores">
      <h3>Current points:</h3>
      <h3 className="myPoints">{props.points}</h3>
      <h3>Number of rolls:</h3>
      <h3 className="myPoints">{props.rolls}</h3>
    </div>
  );
}

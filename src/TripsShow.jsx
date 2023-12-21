export function TripsShow(props) {
  return (
    <div>
      <h1>Trip information</h1>
      <p>Title: {props.trip.title}</p>
      <p>Url: {props.trip.image_url}</p>
      <p>User: {props.trip.user_id}</p>
    </div>
  );
}

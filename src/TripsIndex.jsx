export function TripsIndex(props) {
  return (
    <div>
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.title}</h2>
          <img src={trip.image_url} />
          <p>User: {trip.user_id}</p>
        </div>
      ))}
    </div>
  );
}

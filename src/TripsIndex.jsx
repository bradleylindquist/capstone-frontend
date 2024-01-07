export function TripsIndex(props) {
  return (
    <div>
      <h1>All Trips</h1>
      {props.myTrips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.title}</h2>
          <p>Trip created by: {trip.user.name}</p>
          <img src={trip.image_url} width="800;" />
          {/* <p>Places: {trip.place}</p> */}
          <div>
            <button onClick={() => props.onShowTrip(trip)}>more info</button>
          </div>
        </div>
      ))}
    </div>
  );
}

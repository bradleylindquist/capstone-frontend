export function TripsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip);
  };

  return (
    <div>
      <h1>{props.trip.title}</h1>
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <h4>{place.description}</h4>
          <img src={place.image_url} width="850;" />
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="trip_id" value={props.trip.id} />
        <div>
          Name: <input name="name" type="text" />
        </div>

        <div>
          Type: <input name="place_type_id" type="integer" />
        </div>

        <div>
          Description: <input name="description" type="text" />
        </div>

        <div>
          Add a colorful picture: <input name="image_url" type="text" />
        </div>
        <button type="submit">Add a Place</button>
      </form>
      {/* <button onClick={handleClick}>Delete trip</button> */}
    </div>
  );
}

export function TripsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip);
  };

  return (
    <div>
      <h1>Trip information</h1>
      <p>Title: {props.trip.title}</p>
      <p>Url: {props.trip.image_url}</p>
      <p>User: {props.trip.user_id}</p>
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <img src={place.image_url} width="600;" />
          <p>Description: {place.description}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.trip.title} name="title" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.trip.image_url} name="image_url" type="text" />
        </div>
        <div>
          User: <input defaultValue={props.trip.user_id} name="user_id" type="integer" />
        </div>
        <button type="submit">Update trip</button>
      </form>
      <button onClick={handleClick}>Delete trip</button>
    </div>
  );
}

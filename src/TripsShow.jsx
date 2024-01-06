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
      <h1>{props.trip.title}</h1>
      {/* <p>Title: {props.trip.title}</p> */}
      {/* // <p>Url: {props.trip.image_url}</p>
      // <p>User: {props.trip.user_id}</p> */}
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <img src={place.image_url} width="850;" />
          <p>Description: {place.description}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <button type="submit">Add a Place</button>
        <div>
          Name: <input defaultValue={props.trip.title} name="title" type="text" />
        </div>

        <div>
          Description: <input defaultValue={props.trip.description} name="user_id" type="integer" />
        </div>

        <div>
          Add a colorful picture: <input defaultValue={props.trip.image_url} name="image_url" type="text" />
        </div>
      </form>
      {/* <button onClick={handleClick}>Delete trip</button> */}
    </div>
  );
}

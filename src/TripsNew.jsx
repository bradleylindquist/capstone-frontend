export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" name="name" type="text" />
        </div>
        <div>
          Url: <input className="form-control" name="image_url" type="text" />
        </div>
        <div>
          User: <input className="form-control" name="user_id" type="integer" />
        </div>
        <button type="submit">Create New Trip</button>
      </form>
    </div>
  );
}

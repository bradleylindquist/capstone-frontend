import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function TripsShowPage() {
  const [trip, setTrip] = useState({});
  const params = useParams();

  const handleShowTrip = () => {
    console.log({ "Trip id is": params.id });
    axios.get(`/trips/${params.id}.json`).then((response) => {
      console.log(response);
      setTrip(response.data);
    });
  };

  useEffect(handleShowTrip, []);

  return (
    <div>
      <h1>Trip Info</h1>
      {/* <img src={trip.image_url} /> */}
      <h4>{trip.title}</h4>
      <p>URL: {trip.image_url}</p>
      <p>User: {trip.user}</p>
    </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Usmap } from "./Usmap";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleUpdateTrip = (id, params, successCallback) => {
    console.log("handleUpdateTrip", params);
    axios.patch(`/trips/${id}.json`, params).then((response) => {
      setTrips(
        trips.map((trip) => {
          if (trip.id === response.data.id) {
            return response.data;
          } else {
            return trip;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyTrip = (trip) => {
    console.log("handleDestroyTrip", trip);
    axios.delete(`/trips/${trip.id}.json`).then((response) => {
      setTrips(trips.filter((p) => p.id !== trip.id));
      handleClose();
    });
  };

  const onCreatePlace = (params, successCallback) => {
    console.log("onCreatePlace");
    axios.post("/places.json", params).then((response) => {
      setTrips(
        trips.map((trip) => {
          if (trip.id === response.data.id) {
            return response.data;
          } else {
            return trip;
          }
        })
      );
      setCurrentTrip(response.data);
      successCallback();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  useEffect(handleIndexTrips, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Usmap />} />
        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />
        <Route path="/trips" element={<TripsIndex myTrips={trips} onShowTrip={handleShowTrip} />} />
        <Route path="/" element={<TripsIndex myTrips={trips} onShowTrip={handleShowTrip} />} />
        {/* <Route path="trips/:id" element={<TripsShowPage />} /> */}
      </Routes>

      <Modal show={isTripsShowVisible} onClose={handleClose}>
        <TripsShow trip={currentTrip} onCreatePlace={onCreatePlace} onDestroyTrip={handleDestroyTrip} />
      </Modal>
    </div>
  );
}

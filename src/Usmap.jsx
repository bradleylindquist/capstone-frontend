import React, { useState } from "react";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { Modal } from "./Modal";

export function Usmap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 99% 70%)`;
  const [anchor, setAnchor] = useState([39.099, -94.578]);
  const style = { background: "black", color: "white" };
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverContent, setPopoverContent] = useState(undefined);

  const slices = [
    { id: 1, lat: 41.7328, lng: -72.735, name: "Elmwood Pizza; West Hartford, CT" },
    { id: 2, lat: 45.523, lng: -122.676, name: "Nikolas Pizza; Portland, OR" },
    { id: 3, lat: 40.7126, lng: -74.0027, name: "Daroo's Pizza; New York, Ny" },
    { id: 4, lat: 36.177, lng: -115.139, name: "Pizza Schmizza; Las Vegas, NV" },
    { id: 5, lat: 21.315, lng: -157.852, name: "Colasessano's; Honolulu, HI" },
    { id: 6, lat: 38.627, lng: -90.199, name: "Pizza Luce; St Louis, MO" },
    { id: 7, lat: 50.073, lng: 14.41, name: "Pizza Luce;  Prague, CZ" },
    { id: 8, lat: 45.76, lng: 4.835, name: "Pizza Luce;  Lyon, FR" },
    { id: 8, lat: 24.555, lng: -81.78, name: "Pizza Luce;  Key West, FL" },
  ];

  return (
    <Map height={800} defaultCenter={[47.569, -52.578]} defaultZoom={2.5}>
      {slices.map((slice) => (
        <Overlay key={slice.id} anchor={[slice.lat, slice.lng]} offset={[23, 69]}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/352px-Map_pin_icon_green.svg.png"
            width={45}
            height={75}
            alt="slice.name"
            onClick={() => {
              setPopoverVisible(true);
              setPopoverContent(slice.name);
            }}
          />
        </Overlay>
      ))}

      <ZoomControl buttonStyle={style} />
      <Overlay anchor={[47.9107, -97.04438]} offset={[43, 39]} onDragEnd={setAnchor}>
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/218/218206.png"
          width={75}
          height={75}
          alt=""
          onClick={() => {
            setPopoverVisible(true);
            setPopoverContent("Giovanni's Pizza; Grand Forks, ND");
          }}
        /> */}
      </Overlay>
      <Modal show={popoverVisible} onClose={() => setPopoverVisible(false)}>
        <div>{popoverContent}</div>
      </Modal>
      <Marker width={60} anchor={[59.334, 18.063]} color={color} />
    </Map>
  );
}

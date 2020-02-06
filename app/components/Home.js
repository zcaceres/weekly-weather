import React from 'react';
import { Link } from 'react-router-dom';

import FAKE_LOCATION from '../sample/location.json';

export default function Home({
  location,
  onLocation
}) {
  const [result] = FAKE_LOCATION.results;
  const { geometry } = result;

  function handleSubmit() {
    onLocation(geometry.location);
  }

  return (
    <div>
      <h2>Where do you live?</h2>

      <form>
        <input
          type="text"
          placeholder="1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
        />
        <Link to="/weather">
          <button onClick={handleSubmit}>Get Weather</button>
        </Link>
      </form>

      {location}
    </div>
  );
}

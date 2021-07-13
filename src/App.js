import { useRef, useEffect } from "react";

import { initWidgets } from './widgets';

import './App.css';

const itemId = 'aa1d3f80270146208328cf66d022e09c';

function App() {
  const mapDiv = useRef(null);

  async function loadMap(container) {
    const [
      {default: WebMap}, {default: MapView}
    ] = await Promise.all([
      import('@arcgis/core/WebMap'),
      import('@arcgis/core/views/MapView')
    ]);

    const map = new WebMap({
      portalItem: {
        id: itemId
      }
    });

    const view = new MapView({
      map,
      container
    });

    initWidgets(view);
  }

  useEffect(() => {
    loadMap(mapDiv.current)
  }, [mapDiv]);

  return <div className="mapDiv" data-testid="map" ref={mapDiv}></div>;
}

export default App;

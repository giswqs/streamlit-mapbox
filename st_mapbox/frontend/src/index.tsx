import React from "react"
import ReactDOM from "react-dom"
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import MapboxComponent from "./MapboxComponent"

ReactDOM.render(
  <React.StrictMode>
    <MapboxComponent />
  </React.StrictMode>,
  document.getElementById("root")
)

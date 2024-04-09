import React from 'react';
import {exportHandleClick} from './insideModifier'


function Presets({ presets}) {
  return (
    <div id="presets">
      {Object.entries(presets).map(([presetName, presetFunction], index) => (
        <button style={{margin: 5, fontSize:15}} key={index} onClick={() => window.SelectPreset(presetFunction)}>
          {presetName}
        </button>
      ))}
      <div className="clear"></div>
    </div>
  );
}

export default Presets;
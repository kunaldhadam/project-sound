import React from 'react'
import * as ksfx from '../../src/scripts/jsfx'
import SoundVisualizer from './SoundVisualizer'

function WaveDisplay() {
  return (
    <div className='WaveDisplay'>
      Wave will be displayed here
    </div>
  )
}
function Controller(){
    return(
        <div className='Controller'>
          <table><tr>
          <td>
          <div className='ControlButton' onClick={()=>window.AddToLibrary()}>
            <label>
            Add
            </label>
          </div></td><td>
          <div className='ControlButton' onClick={()=>window.PlayCurrent()}>
          <label>
            Play
            </label>
          </div></td><td>
          <div className='ControlButton'>
          <a className='Button' id='download' href='#' onMouseDown={()=>window.UpdateDownloadLink()} download={"sound.wav"}>
          <label>
            Download
            </label></a>
          </div></td></tr>
          </table>
        </div>
    )
}
export default function ExportView() {
  return(
    <div className='ExportView'>
       <WaveDisplay/>
       <Controller/>
    </div>
  )
}
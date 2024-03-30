import React from 'react'
import '../../src/scripts/jsfx'

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
          <div className='ControlButton'>
            <label>
            Add
            </label>
          </div></td><td>
          <div className='ControlButton' onClick={()=>window.PlayCurrent()}>
          <label>
            Play
            </label>
          </div></td><td>
          <div className='ControlButton' id='download'>
          <label>
            Download
            </label>
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
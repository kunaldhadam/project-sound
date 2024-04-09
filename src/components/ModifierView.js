import React from 'react'
import InsideModifier from './insideModifier'
import '../../src/scripts/jsfx'
import jsfx from '../../src/scripts/jsfx'
import Presets from './Presets'

export default function ModifierView() {

  const Modules=[
    {title:'Generator', list:['Func','A','B','ASlide','BSlide']},
    {title: 'Frequency', list:['Start','Min','Max','Slide','DeltaSlide','RepeatSpeed','ChangeAmount','ChangeSpeed']},
    {title: 'Volume', list:['Master','Attack','Sustain','Punch','Decay']},
    {title: 'Vibrato', list:['Depth','DepthSlide','Frequency','FrequenctSlide']},
    {title: 'Filter', list:['LP','LPSlide','LPResonance','HP','HPSlide']},
    {title:'Phaser', list:['Offset','Sweep']}
  ];
  return (
    <div className='ModifierView'>
      <div className='Presets'>
      <div style={{paddingLeft:6,paddingRight:6}}><b>Presets</b><br/>
      <Presets presets={jsfx.Preset}/>
      </div>
      </div>
          {[0,1,2].map(rowIndex => (
            <tr key={rowIndex}>
              {[0,1].map(cellIndex => {
                const modulesIndex = rowIndex*2+cellIndex;
                if(modulesIndex<Modules.length){
                  const title = Modules[modulesIndex].title;

                return(
                  <td key = {cellIndex} style={{marginLeft: 30, marginRight:30}}>
                    <InsideModifier title={title}/>
                  </td>
                );
                }
              })}
            </tr>
          ))}
    </div>
  )
}

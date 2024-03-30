import React from 'react'
import InsideModifier from './insideModifier'
import '../../src/scripts/jsfx'

export default function ModifierView() {

  const PresetList=['Random','Coin','Laser','Explosion','Powerup','Hit','Jump','Select','Lucky']

  const Modules=[
    // {title: 'Presets', list:[] },
    {title:'Generator', list:['Func','A','B','ASlide','BSlide']},
    {title: 'Frequency', list:['Start','Min','Max','Slide','DeltaSlide','RepeatSpeed','ChangeAmount','ChangeSpeed']},
    {title: 'Volume', list:['Master','Attack','Sustain','Punch','Decay']},
    {title: 'Vibrato', list:['Depth','DepthSlide','Frequency','FrequenctSlide']},
    {title: 'Filter', list:['LP','LPSlide','LPResonance','HP','HPSlide']},
    {title:'Phaser', list:['Offset','Sweep']}
  ];

  let soundButton;
  soundButton = PresetList.map((preset,index)=>(
    <button key={index} style={{width:81,margin:3}}>{preset}</button>
    ));

  return (
    <div className='ModifierView'>
      <div className='Presets'>
      <div style={{paddingLeft:6,paddingRight:6}}><b>Presets</b><br/>
      {soundButton}
      </div>
      </div>
          {[0,1,2].map(rowIndex => (
            <tr key={rowIndex}>
              {[0,1].map(cellIndex => {
                const modulesIndex = rowIndex*2+cellIndex;
                if(modulesIndex<Modules.length){
                  const title = Modules[modulesIndex].title;
                const list = Modules[modulesIndex].list;

                return(
                  <td key = {cellIndex} style={{marginLeft: 30, marginRight:30}}>
                    <InsideModifier title={title} list={list}/>
                  </td>
                );
                }
                else{
                  return(
                    <td key = {cellIndex} style={{marginLeft: 30, marginRight:30}}>
                      <>this is empty</>
                    </td>
                  );
                }
              })}
            </tr>
          ))}
    </div>
  )
}

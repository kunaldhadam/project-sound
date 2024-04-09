import React,{useEffect, useState} from 'react'
import '../../src/scripts/jsfx'
import jsfx from '../../src/scripts/jsfx'


function InsideModifier({title}) {

  const FuncList=['unoise','sine','saw','traingle','square','synth','noise','string']

//initialize range Default values---------------------
  const rangeArray = []
  
  const data = jsfx.Module[title]["params"]
  for(const i in data){
    if(data.hasOwnProperty(i) && data[i].hasOwnProperty('D')){
      if(i === 'Func'){
      }
      else{
        rangeArray.push(data[i].D)
      }
    }
  }

  const [rangeValues,setRangeValues] = useState(rangeArray);
  
  const handleChange = (index, newValue) => {
    const newValues = [...rangeValues]; 
    newValues[index] = newValue;
    setRangeValues(newValues);
    return newValues[index];
  };

  function givesNewObject(){
    
  }

  function handleButtonClick(fn){
    window.SelectPreset(fn)
  }

//------------------------------------------------------
  const paramslist = jsfx.Module[title]["params"]
  let chunks = [];
  for (let i = 0; i < FuncList.length; i += 2) {
    chunks.push(FuncList.slice(i, i + 2));
  }

  let FuncItem = chunks.map((chunk, rowIndex) => (
    <tr key={rowIndex} style={{fontSize:12}}>
      {chunk.map((item, colIndex) => (
        <td className='chuncks' key={colIndex}>
            <input 
            type='radio' style={{alignItems:'left'}} 
            name='fngroup' 
            value= {0}
            id = {[title]+"_"+[item]+"_"}
            onChange={(ev)=>{
              window.ModifyValue(title,"Func",ev.target.value)
            }}
            />
            <label for={[title]+"_"+[item]+"_"}>{item}
            </label>
            </td>
      ))}
    </tr>
  ));
  
  let listitem = Object.keys(paramslist).map((item,index)=>{
    if(item==="Func"){
      return(
        <tr>
        <td key={index}>{item}</td>
        <td style={{textAlign:'right'}}>
          <div class="radio-group">
          <form className='form'>
            {FuncItem}
          </form>
          </div>
          </td>
        </tr>
      );
    }
    else{
      if(item){
        return(
          <tr>
            <td key={index}>{item}</td>
            <td style={{textAlign:'right'}}>
              <input 
                type='range'
                id = {title+"$"+item}  
                min={paramslist[item].L} 
                max={paramslist[item].H} 
                step={(paramslist[item].H - paramslist[item].L) > 10 ? 1 : 0.01} 
                style={{width:170}} 
                name={item}
                value={rangeValues[index]}
                onChange={(ev)=>{
                  window.ModifyValue(title, item, handleChange(index,parseFloat(ev.target.value)));
                }}
                >
              </input>
            </td>
          </tr>
          );
          
      }
    }
}
)

  return (
    <div className='insideModifier'>
      <div style={{paddingLeft:6,paddingRight:6}}><b>{title}</b></div>
      <div>
        <table id='tablewidth'>
          {listitem}
        </table>
      </div>
    </div>
  )
}

export default InsideModifier


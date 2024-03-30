import React,{useEffect, useState} from 'react'
import '../../src/scripts/jsfx'
import jsfx from '../../src/scripts/jsfx'


export default function InsideModifier({title,list}) {

  const FuncList=['unoise','sine','saw','traingle','square','synth','noise','string']

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
            value={item}
            onChange={(ev)=>{
              window.ModifyValue([title],[item],value)
            }}/>
            <label>{item}
            </label>
            </td>
      ))}
    </tr>
  ));

  const [value, setValue] = useState(0)

  // useState(()=>{
  //   const initialValues = {};
  //   Object.keys(paramslist).forEach(item => {
  //     initialValues[title]={
  //       D: item.D
  //     }
      
  //   });
  //   setValue(initialValues);

  // })

  function handleChange(item,e){
    setValue({
      ...jsfx.Module[title]["params"],
      [item]:{
        ...jsfx.Module[title]["params"][item],
        D: parseFloat(e.target.value)
      }
    })
  }

  
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
                value={value}
                onChange={(ev)=>{
                  window.ModifyValue({title: title}, {item: item}, setValue(parseFloat(ev.target.value)));
                }}
                >
              </input>
              </td>
          </tr>
          );
      }
    }
})

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

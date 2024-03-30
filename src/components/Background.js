import React, { Component } from 'react'
import ExportView from './ExportView';
import ModifierView from './ModifierView'
import LibraryView from './LibraryView';
class Background extends Component {
    render() {
      return (
        <div className='background'>
          <h2 style={{textAlign:'center'}}>Sound Effect Generator</h2>
          <ExportView/>
          <ModifierView/>
          <LibraryView/>
        </div>
      )
    }
  }

export default Background;



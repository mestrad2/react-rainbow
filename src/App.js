import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let [colors,setColors] = useState(['violet','blue','lightblue','green','greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color,i) => {
    return(
      <ColorBlock color = {color} key = {i}/>
    )
  })
  return (
    <div className='App'>
      {colorMap}
      <ColorForm addColor ={addColor}/>
    </div>
  );
}

export default App;
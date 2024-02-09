
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [color,setColor]=useState("red")
const changeClr=(color)=>{
  setColor(color)
  console.log(color);
}
useEffect(()=>{
  document.getElementById("box").style.backgroundColor=color
},[color])

  return (
    <>
      <div style={{width:"100%",height:"100vh"}} className="main d-flex align-items-center justify-content-center bg-dark">
        <div id='box' style={{width:"700px",height:"500px",backgroundColor:""}} className="d-flex align-items-center flex-column justify-content-center rounded">
          <div><h2 style={{color:"white"}}>BACKGROUND COLOR CHANGE</h2></div>
        <div className="d-flex mt-2">
        
        <button onClick={()=>changeClr("red")} type="button" class="btn btn-light me-2">RED</button>
        <button onClick={()=>changeClr("blue")} type="button" class="btn btn-light me-2">BLUE</button>
        <button onClick={()=>changeClr("green")} type="button" class="btn btn-light me-2">GREEN</button>
        <button onClick={()=>changeClr("purple")} type="button" class="btn btn-light me-2">PURPLE</button>
        </div>
        </div>
         
      </div>
    </>
  )
}

export default App
